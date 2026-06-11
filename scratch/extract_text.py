import sqlite3
import re

db_path = r'C:\Users\holaf\.gemini\antigravity\conversations\8e57834c-f234-49e8-9a0d-252591318a47.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get all rows and check blobs
cursor.execute("SELECT idx, metadata, step_payload, error_details, task_details, render_info FROM steps;")
rows = cursor.fetchall()

def extract_strings(binary_data):
    if not binary_data:
        return []
    # Find all contiguous sequences of printable ASCII characters
    matches = re.findall(b'[\x20-\x7E\r\n\t]{15,}', binary_data)
    results = []
    for m in matches:
        try:
            text = m.decode('utf-8')
            if 'FF3B00' in text or 'Tironi' in text or 'legibility' in text:
                results.append(text)
        except Exception:
            pass
    return results

print(f"Total rows in steps: {len(rows)}")

found_count = 0
for row in rows:
    idx = row[0]
    for col_idx, col_name in enumerate(['metadata', 'step_payload', 'error_details', 'task_details', 'render_info']):
        blob = row[col_idx + 1]
        if blob:
            matches = extract_strings(blob)
            if matches:
                print(f"\nRow {idx} [{col_name}] matches:")
                for m in matches:
                    print(f"--- MATCH (len={len(m)}) ---")
                    print(m)
                    found_count += 1

# Also check other tables
cursor.execute("SELECT idx, data FROM gen_metadata;")
gen_rows = cursor.fetchall()
for idx, data in gen_rows:
    matches = extract_strings(data)
    if matches:
        print(f"\ngen_metadata Row {idx} matches:")
        for m in matches:
            print(m)
            found_count += 1

conn.close()
