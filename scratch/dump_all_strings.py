import sqlite3
import re

db_path = r'C:\Users\holaf\.gemini\antigravity\conversations\8e57834c-f234-49e8-9a0d-252591318a47.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

out_path = r'C:\Users\holaf\Desktop\Desarrollo - Portafolio\WEB\felilir-portfolio\scratch\all_strings.txt'

with open(out_path, 'w', encoding='utf-8') as f_out:
    # Check steps
    cursor.execute("SELECT idx, metadata, step_payload, error_details, task_details, render_info FROM steps;")
    for row in cursor.fetchall():
        idx = row[0]
        for col_idx, col_name in enumerate(['metadata', 'step_payload', 'error_details', 'task_details', 'render_info']):
            blob = row[col_idx + 1]
            if blob:
                matches = re.findall(b'[\x20-\x7E\r\n\t]{6,}', blob)
                for m in matches:
                    try:
                        text = m.decode('utf-8')
                        f_out.write(f"steps[{idx}].{col_name}: {text}\n")
                    except:
                        pass

    # Check gen_metadata
    cursor.execute("SELECT idx, data FROM gen_metadata;")
    for idx, data in cursor.fetchall():
        if data:
            matches = re.findall(b'[\x20-\x7E\r\n\t]{6,}', data)
            for m in matches:
                try:
                    text = m.decode('utf-8')
                    f_out.write(f"gen_metadata[{idx}]: {text}\n")
                except:
                    pass

    # Check trajectory_metadata_blob
    cursor.execute("SELECT id, data FROM trajectory_metadata_blob;")
    for id_val, data in cursor.fetchall():
        if data:
            matches = re.findall(b'[\x20-\x7E\r\n\t]{6,}', data)
            for m in matches:
                try:
                    text = m.decode('utf-8')
                    f_out.write(f"trajectory_metadata_blob[{id_val}]: {text}\n")
                except:
                    pass

print("Done dumping strings to scratch/all_strings.txt")
conn.close()
