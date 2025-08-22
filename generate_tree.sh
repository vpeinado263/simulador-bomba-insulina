#!/bin/bash

OUTPUT_FILE="STRUCTURE.md"

# Abrir bloque de código Markdown
echo '```bash' > $OUTPUT_FILE

# Estructura del proyecto
echo '.' >> $OUTPUT_FILE
echo '|-- backend' >> $OUTPUT_FILE
echo '|   `-- package.json' >> $OUTPUT_FILE
echo '|-- frontend/' >> $OUTPUT_FILE
echo '|   |-- .next' >> $OUTPUT_FILE
echo '|   |-- node_modules' >> $OUTPUT_FILE
echo '|   |-- public' >> $OUTPUT_FILE
echo '|   `-- src' >> $OUTPUT_FILE
echo '|       |-- pages' >> $OUTPUT_FILE
echo '|       |   `-- index.js' >> $OUTPUT_FILE
echo '|   |-- eslint.config.mjs' >> $OUTPUT_FILE
echo '|   |-- jsconfig.json' >> $OUTPUT_FILE
echo '|   |-- next.config.mjs' >> $OUTPUT_FILE
echo '|   |-- package.json' >> $OUTPUT_FILE
echo '|   |-- package-lock.json' >> $OUTPUT_FILE
echo '|   |-- postcss.config.mjs' >> $OUTPUT_FILE
echo '|-- node_modules' >> $OUTPUT_FILE
echo '|-- .eslintrc.js' >> $OUTPUT_FILE
echo '|-- .gitignore' >> $OUTPUT_FILE
echo '|-- .prettierrc' >> $OUTPUT_FILE
echo '|-- LICENSE' >> $OUTPUT_FILE
echo '|-- package-lock.json' >> $OUTPUT_FILE
echo '|-- package.json' >> $OUTPUT_FILE
echo '|-- README.md' >> $OUTPUT_FILE
echo '|-- generate_tree.sh' >> $OUTPUT_FILE 

# Cierre de bloque de código Markdown
echo '```' >> $OUTPUT_FILE

echo "✅ STRUCTURE.md generado con el orden personalizado"

