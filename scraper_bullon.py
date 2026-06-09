import requests
import json
import time
import random
import sys
from bs4 import BeautifulSoup

try:
    sys.stdout.reconfigure(line_buffering=True)
except (AttributeError, ValueError):
    pass

BASE_URL = "https://www.alejandrobullon.com"
START_URL = "https://www.alejandrobullon.com/devocionales"
OUTPUT_FILE = "alejandro_bullon_001.json"

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
}

def save_json(results):
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

def get_html(url, retries=3):
    for attempt in range(retries):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=15)
            resp.raise_for_status()
            return resp.text
        except Exception as e:
            print(f"  [Intento {attempt+1}/{retries}] Error: {e}")
            if attempt < retries - 1:
                time.sleep(3)
    return None

def links_on_page(soup):
    links = []
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('/devocionales/') and 'offset' not in href and '#' not in href:
            full_link = BASE_URL + href
            if full_link not in links:
                links.append(full_link)
    return links

def next_page_url(soup, visited):
    for a in soup.find_all('a', href=True):
        href = a['href']
        if 'offset' in href and 'reversePaginate' not in href and href != '#':
            if href.startswith('/'):
                candidate = BASE_URL + href
            elif href.startswith('?'):
                candidate = START_URL + href
            else:
                candidate = href
            if candidate not in visited:
                return candidate
    return None

def extract_devocional(url, dia_count):
    html = get_html(url)
    if not html:
        return None

    soup = BeautifulSoup(html, 'html.parser')

    title_elem = soup.select_one('h1.entry-title') or soup.find('h1')
    raw_title = title_elem.text.strip() if title_elem else f"Devocional {dia_count}"
    titulo = f"\U0001F54A {dia_count:03d} | {raw_title.upper()} \U0001F54A"

    fecha = ""
    meta_date = soup.find('meta', attrs={'itemprop': 'datePublished'})
    if meta_date and meta_date.get('content'):
        fecha = meta_date['content'][:10]

    content_area = soup.select_one('.blog-item-content.e-content')
    if content_area:
        paras = content_area.find_all('p')
    else:
        html_content = soup.select_one('.sqs-html-content')
        if html_content:
            paras = html_content.find_all('p')
        else:
            article = soup.find('article')
            if article:
                paras = article.find_all('p')
            else:
                paras = []

    paragraphs = [p.text.strip() for p in paras if p.text.strip()]

    if not paragraphs:
        return None

    devocional_text = "\n\n".join(paragraphs)

    if len(paragraphs) >= 2:
        mensaje_text = paragraphs[-2]
    else:
        mensaje_text = paragraphs[-1]

    return {
        "dia": dia_count,
        "titulo": titulo,
        "mensaje": mensaje_text,
        "devocional": devocional_text,
        "tema": "Web: https://proyectoja.github.io/",
        "imagen": "",
        "perfil": "https://i.imgur.com/2CblfOU.jpg",
        "check": "https://i.imgur.com/HrJfl1s.png",
        "publicador": "Alejandro Bull\u00f3n",
        "fecha": fecha,
        "hora": "12:00 AM",
        "redes_sociales": {
            "whatsapp": "https://proyectoja.github.io/",
            "facebook": "https://proyectoja.github.io/",
            "youtube": "https://proyectoja.github.io/",
            "tiktok": "https://proyectoja.github.io/",
            "instagram": "https://proyectoja.github.io/"
        }
    }

def main():
    print("=" * 60)
    print("SCRAPER DE DEVOCIONALES - ALEJANDRO BULLON")
    print("=" * 60)

    results = []
    save_json(results)
    print(f"\nArchivo {OUTPUT_FILE} creado. Abrelo para ver el progreso en tiempo real.\n")

    visited_pages = set()
    current_url = START_URL
    page_num = 1
    dia_count = 1
    all_links_seen = set()

    while current_url:
        print(f"\n--- Pagina {page_num} ---")
        print(f"[Pagina {page_num}] Fetching: {current_url}")
        html = get_html(current_url)
        if not html:
            print("  No se pudo obtener la pagina, deteniendo...")
            break

        soup = BeautifulSoup(html, 'html.parser')

        page_links = links_on_page(soup)
        new_links = [l for l in page_links if l not in all_links_seen]
        for l in new_links:
            all_links_seen.add(l)

        print(f"  Links en pagina: {len(new_links)}")

        if not new_links:
            print("  No hay links nuevos en esta pagina, deteniendo.")
            break

        for link in new_links:
            print(f"  [{dia_count}] Extrayendo: {link}")
            data = extract_devocional(link, dia_count)
            if data:
                results.append(data)
                dia_count += 1
                save_json(results)
                print(f"    OK -> Dia {data['dia']}: {raw_title[:60] if (raw_title:=data['titulo']) else 'OK'} [GUARDADO]")
            else:
                print(f"    SKIP (no se pudo extraer)")

            delay = random.uniform(2, 4)
            time.sleep(delay)

        visited_pages.add(current_url)
        next_url = next_page_url(soup, visited_pages)

        if next_url and next_url != current_url:
            current_url = next_url
            page_num += 1
            delay = random.uniform(2, 4)
            print(f"  Siguiente pagina en {delay:.1f}s...")
            time.sleep(delay)
        else:
            print("  No hay mas paginas.")
            current_url = None

        if page_num > 100:
            break

    print(f"\n{'=' * 60}")
    print(f"COMPLETADO: {len(results)} devocionales en {OUTPUT_FILE}")
    print(f"{'=' * 60}")

if __name__ == '__main__':
    main()
