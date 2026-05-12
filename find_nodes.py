import json

with open(r'C:\Users\lifei\.gemini\antigravity\brain\41b356c9-6990-4619-b2a6-7f4411ec547c\.system_generated\steps\5\output.txt', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('nodes_details.txt', 'w', encoding='utf-8') as out:
    def find_nodes(node):
        name = node.get('name', '').lower()
        if 'legacy' in name and 'table' in name:
            out.write('FOUND: ' + node['id'] + ' | ' + node['name'] + '\n')
        for child in node.get('children', []):
            find_nodes(child)
    find_nodes(data['nodes'][0])
