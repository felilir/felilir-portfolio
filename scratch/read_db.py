import sqlite3

db_path = r'C:\Users\holaf\.gemini\antigravity\conversations\8e57834c-f234-49e8-9a0d-252591318a47.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get table names
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Tables:", tables)

for table in tables:
    table_name = table[0]
    print(f"\n--- Columns in {table_name} ---")
    cursor.execute(f"PRAGMA table_info({table_name});")
    print(cursor.fetchall())

# Let's search for "Tironi" or "FF3B00" in any of the tables
for table in tables:
    table_name = table[0]
    cursor.execute(f"PRAGMA table_info({table_name});")
    cols = [c[1] for c in cursor.fetchall()]
    for col in cols:
        try:
            cursor.execute(f"SELECT {col} FROM {table_name} WHERE {col} LIKE '%Tironi%' OR {col} LIKE '%FF3B00%';")
            rows = cursor.fetchall()
            if rows:
                print(f"\nFound match in {table_name}.{col}:")
                for r in rows[:3]:
                    val = str(r[0])
                    print(f"Length: {len(val)}, Start: {val[:300]}")
                    if len(val) > 1000:
                        # Write the full match to scratch/db_match.txt
                        with open(r'C:\Users\holaf\.gemini\antigravity\brain\8e57834c-f234-49e8-9a0d-252591318a47\scratch\db_match.txt', 'w', encoding='utf-8') as f:
                            f.write(val)
                        print("Wrote full value to scratch/db_match.txt")
        except sqlite3.OperationalError:
            pass
conn.close()
