import os, re

dir_path = 'c:/Users/DELL/Desktop/Honeywell Seo/website/app/(site)/products'
count = 0

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            def replace_heading(match):
                tag = match.group(0)
                if 'text-center' in tag:
                    return tag
                if 'className=' in tag:
                    return re.sub(r'className="([^"]*)"', r'className="\1 text-center"', tag)
                else:
                    return tag.replace('<Heading ', '<Heading className="text-center" ')
            
            new_content = re.sub(r'<Heading[^>]*id="overview-heading"[^>]*>', replace_heading, content)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print('Updated', file_path)

print(f'Updated {count} files.')
