#Este script se ejecuta con Bash.

OUTPUT_FILE="STRUCTURE.md"
ROOT_DIR="."

# Abrir bloque de código Markdown, inicia el bloque de código
echo '```bash' > $OUTPUT_FILE

# Función recursiva para imprimir árbol en orden VS Code, recorre cada carpeta
function print_tree() {
    local DIR="$1"
    local PREFIX="$2"

    # Carpetas primero, ordenadas alfabéticamente
    local folders=($(ls -1p "$DIR" | grep '/$' | sort))
    for folder in "${folders[@]}"; do
        local BASENAME=$(basename "$folder")

        # Placeholders para carpetas grandes
        if [[ "$BASENAME" == ".next" || "$BASENAME" == "node_modules" ]]; then
            echo "${PREFIX}|-- $BASENAME" >> $OUTPUT_FILE
            continue
        fi

        echo "${PREFIX}|-- $BASENAME/" >> $OUTPUT_FILE
        # Recursividad
        print_tree "$DIR/$BASENAME" "$PREFIX|   "
    done

    # Archivos, ordenados alfabéticamente
    local files=($(ls -1p "$DIR" | grep -v '/$' | sort))
    for file in "${files[@]}"; do
        local BASENAME=$(basename "$file")

        # Ignorar la carpeta .git
        if [[ "$BASENAME" == ".git" ]]; then
            continue
        fi

        echo "${PREFIX}|-- $BASENAME" >> $OUTPUT_FILE
    done
}

# Imprimir raíz
echo "." >> $OUTPUT_FILE
print_tree "$ROOT_DIR" ""

# Cierre del bloque de código Markdown
echo '```' >> $OUTPUT_FILE

echo "✅ ¡Árbol de Directorio creado con Éxito!"
