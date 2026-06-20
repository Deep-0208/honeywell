import sys, json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import suggest_questions
from graphify.report import generate
from pathlib import Path
import networkx as nx

graph_data = json.loads(Path('c:/Users/DELL/Desktop/Honeywell Seo/website/graphify-out/graph.json').read_text(encoding='utf-8'))
analysis = json.loads(Path('c:/Users/DELL/Desktop/Honeywell Seo/website/graphify-out/.graphify_analysis.json').read_text(encoding='utf-8'))
detection = {'total_files': 151, 'total_words': 106548, 'files': {'code':[]}} # Dummy detection

G = nx.node_link_graph(graph_data)
communities = {int(k): v for k, v in analysis.get('communities', {}).items()}
cohesion = {int(k): v for k, v in analysis.get('cohesion', {}).items()}
tokens = {'input': 46809, 'output': 4883}

labels = {cid: f'Community {cid}' for cid in communities}

# Get top 5 communities by size
sorted_comms = sorted(communities.items(), key=lambda x: len(x[1]), reverse=True)[:5]
top_labels = {
    sorted_comms[0][0] if len(sorted_comms) > 0 else -1: "UI and Functional Core",
    sorted_comms[1][0] if len(sorted_comms) > 1 else -1: "Hydraulic Cylinders Content",
    sorted_comms[2][0] if len(sorted_comms) > 2 else -1: "Hydraulic Power Packs Hub",
    sorted_comms[3][0] if len(sorted_comms) > 3 else -1: "Configuration and Tooling",
    sorted_comms[4][0] if len(sorted_comms) > 4 else -1: "Homepage and Marketing",
}
for k, v in top_labels.items():
    if k != -1:
        labels[k] = v

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis.get('gods', []), analysis.get('surprises', []), detection, tokens, 'c:/Users/DELL/Desktop/Honeywell Seo/website', suggested_questions=questions)
Path('c:/Users/DELL/Desktop/Honeywell Seo/website/graphify-out/GRAPH_REPORT.md').write_text(report, encoding='utf-8')
print("Report generated successfully.")
