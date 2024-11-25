const subjects = {
    PHP: [
        {
            question: "Quelle est la fonction pour afficher du texte en PHP?",
            answers: [
                { text: "echo", correct: true},
                { text: "print", correct: false},
                { text: "printf", correct: false},
                { text: "write", correct: false},
            ]
        },
        {
            question: "Quelle est l'extension de fichier pour les fichiers PHP?",
            answers: [
                { text: ".php", correct: true},
                { text: ".ph", correct: false},
                { text: ".pp", correct: false},
                { text: ".html", correct: false},
            ]
        },
        {
            question: "Comment démarrez-vous un bloc de code PHP?",
            answers: [
                { text: "?php", correct: true},
                { text: "php", correct: false},
                { text: "script>", correct: false},
                { text: "code>", correct: false},
            ]
        },
        {
            question: "Quelle variable superglobale est utilisée pour collecter les données de formulaire soumises via HTTP POST?",
            answers: [
                { text: "$_POST", correct: true},
                { text: "$_GET", correct: false},
                { text: "$_REQUEST", correct: false},
                { text: "$_FORM", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour inclure un fichier en PHP?",
            answers: [
                { text: "include", correct: true},
                { text: "require", correct: false},
                { text: "load", correct: false},
                { text: "insert", correct: false},
            ]
        },
        {
            question: "Quelle est la fonction utilisée pour démarrer une session en PHP?",
            answers: [
                { text: "session_start()", correct: true},
                { text: "start_session()", correct: false},
                { text: "begin_session()", correct: false},
                { text: "init_session()", correct: false},
            ]
        },
        {
            question: "Quelle fonction PHP est utilisée pour vérifier la longueur d'une chaîne?",
            answers: [
                { text: "strlen()", correct: true},
                { text: "strlength()", correct: false},
                { text: "str_size()", correct: false},
                { text: "string_length()", correct: false},
            ]
        },
        {
            question: "Comment déclarer une variable en PHP?",
            answers: [
                { text: "$variableName", correct: true},
                { text: "var variableName", correct: false},
                { text: "variableName", correct: false},
                { text: "declare variableName", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour inclure un fichier seulement une fois en PHP?",
            answers: [
                { text: "include_once", correct: true},
                { text: "require_once", correct: false},
                { text: "load_once", correct: false},
                { text: "insert_once", correct: false},
            ]
        },
        {
            question: "Quelle est la fonction utilisée pour convertir une chaîne en entier en PHP?",
            answers: [
                { text: "intval()", correct: true},
                { text: "parseInt()", correct: false},
                { text: "toInt()", correct: false},
                { text: "strToInt()", correct: false},
            ]
        },
        {
            question: "Quelle est la syntaxe correcte pour un commentaire sur une seule ligne en PHP?",
            answers: [
                { text: "// Commentaire", correct: true},
                { text: "/* Commentaire */", correct: false},
                { text: "# Commentaire", correct: false},
                { text: "-- Commentaire", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour obtenir la date et l'heure actuelles en PHP?",
            answers: [
                { text: "date()", correct: true},
                { text: "current_date()", correct: false},
                { text: "now()", correct: false},
                { text: "getDate()", correct: false},
            ]
        },
        {
            question: "Quelle fonction PHP est utilisée pour trier un tableau en ordre croissant?",
            answers: [
                { text: "sort()", correct: true},
                { text: "order()", correct: false},
                { text: "arrange()", correct: false},
                { text: "orderBy()", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour trouver la position d'une sous-chaîne dans une chaîne en PHP?",
            answers: [
                { text: "strpos()", correct: true},
                { text: "substr()", correct: false},
                { text: "search()", correct: false},
                { text: "find()", correct: false},
            ]
        },
        {
            question: "Quelle fonction PHP est utilisée pour compter tous les éléments d'un tableau?",
            answers: [
                { text: "count()", correct: true},
                { text: "sizeof()", correct: false},
                { text: "array_count()", correct: false},
                { text: "element_count()", correct: false},
            ]
        },
        {
            question: "Quelle est la balise correcte pour insérer du code PHP dans un document HTML?",
            answers: [
                { text: "?php ?>", correct: true},
                { text: "php ?>", correct: false},
                { text: "code ?>", correct: false},
                { text: "script ?>", correct: false},
            ]
        },
        {
            question: "Quelle fonction PHP est utilisée pour vérifier si une variable est définie?",
            answers: [
                { text: "isset()", correct: true},
                { text: "is_defined()", correct: false},
                { text: "defined()", correct: false},
                { text: "is_set()", correct: false},
            ]
        },
        {
            question: "Quelle fonction PHP est utilisée pour supprimer les espaces au début et à la fin d'une chaîne?",
            answers: [
                { text: "trim()", correct: true},
                { text: "strip()", correct: false},
                { text: "clean()", correct: false},
                { text: "remove_spaces()", correct: false},
            ]
        },
        {
            question: "Quelle fonction PHP est utilisée pour ouvrir un fichier?",
            answers: [
                { text: "fopen()", correct: true},
                { text: "open_file()", correct: false},
                { text: "file_open()", correct: false},
                { text: "open()", correct: false},
            ]
        },
        {
            question: "Quelle méthode de tableau est utilisée pour obtenir la longueur d'un tableau en PHP?",
            answers: [
                { text: "count()", correct: true},
                { text: "length()", correct: false},
                { text: "size()", correct: false},
                { text: "array_size()", correct: false},
            ]
        }
    ],
    Python: [
        {
            question: "Comment déclarer une fonction en Python?",
            answers: [
                { text: "function myFunction()", correct: false},
                { text: "def myFunction():", correct: true},
                { text: "func myFunction():", correct: false},
                { text: "define myFunction():", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour convertir une chaîne en majuscules en Python?",
            answers: [
                { text: "uppercase()", correct: false},
                { text: "toUpper()", correct: false},
                { text: "upper()", correct: true},
                { text: "toUpperCase()", correct: false},
            ]
        },        
        {
            question: "Quelle est la méthode correcte pour ajouter un élément à la fin d'une liste en Python?",
            answers: [
                { text: "append()", correct: true},
                { text: "add()", correct: false},
                { text: "push()", correct: false},
                { text: "insert()", correct: false},
            ]
        },
        {
            question: "Comment commentez-vous une ligne en Python?",
            answers: [
                { text: "# Commentaire", correct: true},
                { text: "// Commentaire", correct: false},
                { text: "/* Commentaire */", correct: false},
                { text: "<!-- Commentaire -->", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour créer un dictionnaire en Python?",
            answers: [
                { text: "dict = {}", correct: true},
                { text: "dict = []", correct: false},
                { text: "dict = ()", correct: false},
                { text: "dict = set()", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour obtenir la longueur d'une liste en Python?",
            answers: [
                { text: "len()", correct: true},
                { text: "length()", correct: false},
                { text: "size()", correct: false},
                { text: "count()", correct: false},
            ]
        },
        {
            question: "Quelle est la syntaxe correcte pour un bloc 'if' en Python?",
            answers: [
                { text: "if x > y:", correct: true},
                { text: "if (x > y) then", correct: false},
                { text: "if x > y then:", correct: false},
                { text: "if x > y {}", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour convertir une chaîne en entier en Python?",
            answers: [
                { text: "int()", correct: true},
                { text: "parseInt()", correct: false},
                { text: "toInt()", correct: false},
                { text: "stringToInt()", correct: false},
            ]
        },
        {
            question: "Comment déclarez-vous une variable en Python?",
            answers: [
                { text: "x = 10", correct: true},
                { text: "int x = 10", correct: false},
                { text: "let x = 10", correct: false},
                { text: "var x = 10", correct: false},
            ]
        },
        {
            question: "Quelle est la sortie de print(2 ** 3) en Python?",
            answers: [
                { text: "8", correct: true},
                { text: "6", correct: false},
                { text: "9", correct: false},
                { text: "4", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous le type d'une variable en Python?",
            answers: [
                { text: "type()", correct: true},
                { text: "checkType()", correct: false},
                { text: "typeof()", correct: false},
                { text: "getType()", correct: false},
            ]
        },
        {
            question: "Quelle fonction est utilisée pour lire l'entrée utilisateur en Python?",
            answers: [
                { text: "input()", correct: true},
                { text: "read()", correct: false},
                { text: "get()", correct: false},
                { text: "scan()", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour créer une nouvelle liste en Python?",
            answers: [
                { text: "list = []", correct: true},
                { text: "list = {}", correct: false},
                { text: "list = ()", correct: false},
                { text: "list = set()", correct: false},
            ]
        },
        {
            question: "Quelle est la syntaxe correcte pour une boucle 'for' en Python?",
            answers: [
                { text: "for x in range(10):", correct: true},
                { text: "for (x = 0; x < 10; x++)", correct: false},
                { text: "for x to 10:", correct: false},
                { text: "for x < 10:", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour ouvrir un fichier en lecture en Python?",
            answers: [
                { text: "open('filename', 'r')", correct: true},
                { text: "openFile('filename', 'r')", correct: false},
                { text: "fileOpen('filename', 'r')", correct: false},
                { text: "readFile('filename')", correct: false},
            ]
        },
        {
            question: "Comment déclarez-vous une classe en Python?",
            answers: [
                { text: "class MyClass:", correct: true},
                { text: "class MyClass()", correct: false},
                { text: "define class MyClass:", correct: false},
                { text: "create class MyClass:", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour créer un ensemble en Python?",
            answers: [
                { text: "set = set()", correct: true},
                { text: "set = {}", correct: false},
                { text: "set = []", correct: false},
                { text: "set = ()", correct: false},
            ]
        },
        {
            question: "Comment déclarez-vous une chaîne en Python?",
            answers: [
                { text: "str = 'Hello'", correct: true},
                { text: "string str = 'Hello'", correct: false},
                { text: "let str = 'Hello'", correct: false},
                { text: "var str = 'Hello'", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour vérifier si une clé existe dans un dictionnaire en Python?",
            answers: [
                { text: "'key' in dict", correct: true},
                { text: "dict.has_key('key')", correct: false},
                { text: "dict.contains('key')", correct: false},
                { text: "dict.exists('key')", correct: false},
            ]
        },
        {
            question: "Comment déclarez-vous une constante en Python?",
            answers: [
                { text: "En Python, il n'y a pas de mots-clés pour déclarer des constantes", correct: true},
                { text: "const PI = 3.14", correct: false},
                { text: "PI = 3.14", correct: false},
                { text: "final PI = 3.14", correct: false},
            ]
        }
    ],
    JavaScript: [
        {
            question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript?",
            answers: [
                { text: "push()", correct: true},
                { text: "pop()", correct: false},
                { text: "shift()", correct: false},
                { text: "unshift()", correct: false},
            ]
        },
        {
            question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript?",
            answers: [
                { text: "pop()", correct: true},
                { text: "push()", correct: false},
                { text: "shift()", correct: false},
                { text: "unshift()", correct: false},
            ]
        },
        {
            question: "Comment écrivez-vous un commentaire sur une seule ligne en JavaScript?",
            answers: [
                { text: "// Commentaire", correct: true},
                { text: "# Commentaire", correct: false},
                { text: "/* Commentaire */", correct: false},
                { text: "<!-- Commentaire -->", correct: false},
            ]
        },
        {
            question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript?",
            answers: [
                { text: "push()", correct: true},
                { text: "add()", correct: false},
                { text: "append()", correct: false},
                { text: "insert()", correct: false},
            ]
        },
        {
            question: "Quelle est la sortie de console.log(typeof NaN) en JavaScript?",
            answers: [
                { text: "number", correct: true},
                { text: "NaN", correct: false},
                { text: "undefined", correct: false},
                { text: "object", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour créer un nouvel objet en JavaScript?",
            answers: [
                { text: "let obj = {}", correct: true},
                { text: "let obj = []", correct: false},
                { text: "let obj = ()", correct: false},
                { text: "let obj = set()", correct: false},
            ]
        },
        {
            question: "Comment accédez-vous à une propriété d'un objet en JavaScript?",
            answers: [
                { text: "obj.property", correct: true},
                { text: "obj->property", correct: false},
                { text: "obj[property]", correct: false},
                { text: "obj:property", correct: false},
            ]
        },
        {
            question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript?",
            answers: [
                { text: "pop()", correct: true},
                { text: "remove()", correct: false},
                { text: "delete()", correct: false},
                { text: "shift()", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous le type d'une variable en JavaScript?",
            answers: [
                { text: "typeof variable", correct: true},
                { text: "typeOf(variable)", correct: false},
                { text: "getType(variable)", correct: false},
                { text: "checkType(variable)", correct: false},
            ]
        },
        {
            question: "Quelle méthode est utilisée pour créer un tableau en JavaScript?",
            answers: [
                { text: "let arr = []", correct: true},
                { text: "let arr = {}", correct: false},
                { text: "let arr = ()", correct: false},
                { text: "let arr = set()", correct: false},
            ]
        },
        {
            question: "Quelle est la sortie de console.log(2 + '2') en JavaScript?",
            answers: [
                { text: "22", correct: true},
                { text: "4", correct: false},
                { text: "NaN", correct: false},
                { text: "undefined", correct: false},
            ]
        },
        {
            question: "Comment déclarer une variable en JavaScript?",
            answers: [
                { text: "let x = 10", correct: true},
                { text: "int x = 10", correct: false},
                { text: "var x = 10", correct: false},
                { text: "const x = 10", correct: false},
            ]
        },
        {
            question: "Quelle méthode est utilisée pour ajouter un élément au début d'un tableau en JavaScript?",
            answers: [
                { text: "unshift()", correct: true},
                { text: "push()", correct: false},
                { text: "shift()", correct: false},
                { text: "insert()", correct: false},
            ]
        },
        {
            question: "Comment créez-vous une boucle 'for' en JavaScript?",
            answers: [
                { text: "for (let i = 0; i < 10; i++)", correct: true},
                { text: "for (i = 0; i < 10; i++)", correct: false},
                { text: "for (let i = 0; i < 10)", correct: false},
                { text: "for i in range(10):", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous si une variable est définie en JavaScript?",
            answers: [
                { text: "if (typeof variable !== 'undefined')", correct: true},
                { text: "if (variable.exists())", correct: false},
                { text: "if (variable != null)", correct: false},
                { text: "if (variable.isDefined())", correct: false},
            ]
        },
        {
            question: "Comment accédez-vous à un élément d'un tableau en JavaScript?",
            answers: [
                { text: "arr[0]", correct: true},
                { text: "arr.get(0)", correct: false},
                { text: "arr{0}", correct: false},
                { text: "arr.0", correct: false},
            ]
        },
        {
            question: "Comment créez-vous un objet en JavaScript?",
            answers: [
                { text: "let obj = {}", correct: true},
                { text: "let obj = []", correct: false},
                { text: "let obj = ()", correct: false},
                { text: "let obj = set()", correct: false},
            ]
        },
        {
            question: "Quelle méthode est utilisée pour convertir une chaîne en nombre en JavaScript?",
            answers: [
                { text: "parseInt()", correct: true},
                { text: "toInt()", correct: false},
                { text: "Number()", correct: false},
                { text: "convertToInt()", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous si une chaîne contient une sous-chaîne en JavaScript?",
            answers: [
                { text: "str.includes(substring)", correct: true},
                { text: "str.contains(substring)", correct: false},
                { text: "str.has(substring)", correct: false},
                { text: "str.search(substring)", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour ajouter une propriété à un objet en JavaScript?",
            answers: [
                { text: "obj.property = value", correct: true},
                { text: "obj->property = value", correct: false},
                { text: "obj[property] = value", correct: false},
                { text: "obj:property = value", correct: false},
            ]
        }
    ],
    Powershell: [
        {
            question: "Quelle cmdlet est utilisée pour obtenir de l'aide en PowerShell?",
            answers: [
                { text: "Get-Help", correct: true},
                { text: "Help-Get", correct: false},
                { text: "Show-Help", correct: false},
                { text: "Help-Show", correct: false},
            ]
        },
        {
            question: "Comment affichez-vous du texte en PowerShell?",
            answers: [
                { text: "Write-Output 'Bonjour'", correct: true},
                { text: "print 'Bonjour'", correct: false},
                { text: "echo 'Bonjour'", correct: false},
                { text: "console.log('Bonjour')", correct: false},
            ]
        },
        {
            question: "Comment créez-vous une fonction en PowerShell?",
            answers: [
                { text: "function MyFunction { }", correct: true},
                { text: "def MyFunction { }", correct: false},
                { text: "function MyFunction() { }", correct: false},
                { text: "def MyFunction() { }", correct: false},
            ]
        },
        {
            question: "Comment obtenez-vous la date et l'heure actuelles en PowerShell?",
            answers: [
                { text: "Get-Date", correct: true},
                { text: "DateTime.Now", correct: false},
                { text: "Date-Now", correct: false},
                { text: "Get-CurrentDate", correct: false},
            ]
        },
        {
            question: "Quelle cmdlet est utilisée pour lire le contenu d'un fichier en PowerShell?",
            answers: [
                { text: "Get-Content", correct: true},
                { text: "Read-File", correct: false},
                { text: "Get-File", correct: false},
                { text: "Read-Content", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous le type d'une variable en PowerShell?",
            answers: [
                { text: "$variable.GetType()", correct: true},
                { text: "typeof($variable)", correct: false},
                { text: "Get-Type($variable)", correct: false},
                { text: "$variable.Type()", correct: false},
            ]
        },
        {
            question: "Quelle cmdlet est utilisée pour arrêter un service en PowerShell?",
            answers: [
                { text: "Stop-Service", correct: true},
                { text: "End-Service", correct: false},
                { text: "Terminate-Service", correct: false},
                { text: "Shutdown-Service", correct: false},
            ]
        },
        {
            question: "Comment faites-vous une boucle 'for' en PowerShell?",
            answers: [
                { text: "for ($i = 0; $i -lt 10; $i++) { }", correct: true},
                { text: "for ($i = 0; $i < 10; $i++) { }", correct: false},
                { text: "for i in 0..9 { }", correct: false},
                { text: "foreach ($i in 0..9) { }", correct: false},
            ]
        },
        {
            question: "Comment arrêtez-vous un script en cours d'exécution en PowerShell?",
            answers: [
                { text: "exit", correct: true},
                { text: "stop", correct: false},
                { text: "terminate", correct: false},
                { text: "end", correct: false},
            ]
        },
        {
            question: "Comment affichez-vous une liste de processus en cours d'exécution en PowerShell?",
            answers: [
                { text: "Get-Process", correct: true},
                { text: "Show-Process", correct: false},
                { text: "List-Process", correct: false},
                { text: "Get-RunningProcesses", correct: false},
            ]
        },
        {
            question: "Comment ajoutez-vous un élément à un tableau en PowerShell?",
            answers: [
                { text: "$array += 10", correct: true},
                { text: "$array.push(10)", correct: false},
                { text: "Add-Item -Array $array -Value 10", correct: false},
                { text: "$array.Add(10)", correct: false},
            ]
        },
        {
            question: "Quelle cmdlet est utilisée pour obtenir des informations sur un service en PowerShell?",
            answers: [
                { text: "Get-Service", correct: true},
                { text: "Show-Service", correct: false},
                { text: "Service-Info", correct: false},
                { text: "Get-ServiceInfo", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous si un fichier existe en PowerShell?",
            answers: [
                { text: "Test-Path 'file.txt'", correct: true},
                { text: "if (Test-File 'file.txt')", correct: false},
                { text: "if (File-Exists 'file.txt')", correct: false},
                { text: "if (Exists-Path 'file.txt')", correct: false},
            ]
        },
        {
            question: "Quelle cmdlet est utilisée pour créer un nouveau répertoire en PowerShell?",
            answers: [
                { text: "New-Item -ItemType Directory", correct: true},
                { text: "New-Directory", correct: false},
                { text: "Create-Directory", correct: false},
                { text: "Make-Directory", correct: false},
            ]
        },
        {
            question: "Comment récupérez-vous la liste des modules installés en PowerShell?",
            answers: [
                { text: "Get-Module -ListAvailable", correct: true},
                { text: "Show-Modules", correct: false},
                { text: "List-Modules", correct: false},
                { text: "Get-InstalledModules", correct: false},
            ]
        },
        {
            question: "Comment obtenez-vous l'adresse IP de votre machine en PowerShell?",
            answers: [
                { text: "Get-NetIPAddress", correct: true},
                { text: "Get-IP", correct: false},
                { text: "Show-IP", correct: false},
                { text: "Get-IPAddress", correct: false},
            ]
        },
        {
            question: "Quelle cmdlet est utilisée pour mettre à jour un module en PowerShell?",
            answers: [
                { text: "Update-Module", correct: true},
                { text: "Upgrade-Module", correct: false},
                { text: "Refresh-Module", correct: false},
                { text: "Renew-Module", correct: false},
            ]
        },
        {
            question: "Comment exécutez-vous un script PowerShell?",
            answers: [
                { text: "./script.ps1", correct: true},
                { text: "run script.ps1", correct: false},
                { text: "exec script.ps1", correct: false},
                { text: "sh script.ps1", correct: false},
            ]
        },
        {
            question: "Comment faites-vous une boucle 'foreach' en PowerShell?",
            answers: [
                { text: "foreach ($item in $collection) { }", correct: true},
                { text: "for ($item in $collection) { }", correct: false},
                { text: "foreach ($collection as $item) { }", correct: false},
                { text: "for each $item in $collection { }", correct: false},
            ]
        },
        {
            question: "Quelle cmdlet est utilisée pour installer un module en PowerShell?",
            answers: [
                { text: "Install-Module", correct: true},
                { text: "Add-Module", correct: false},
                { text: "Get-Module -Install", correct: false},
                { text: "New-Module -Install", correct: false},
            ]
        }
    ],
    Java: [
        {
            question: "Comment déclarer une classe en Java?",
            answers: [
                { text: "class MyClass {}", correct: true},
                { text: "MyClass class {}", correct: false},
                { text: "define MyClass {}", correct: false},
                { text: "new class MyClass {}", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour imprimer du texte à la console en Java?",
            answers: [
                { text: "System.out.println('Bonjour');", correct: true},
                { text: "console.log('Bonjour');", correct: false},
                { text: "print('Bonjour');", correct: false},
                { text: "echo 'Bonjour';", correct: false},
            ]
        },
        {
            question: "Comment définissez-vous une méthode en Java?",
            answers: [
                { text: "public void myMethod() { }", correct: true},
                { text: "function myMethod() { }", correct: false},
                { text: "def myMethod() { }", correct: false},
                { text: "void myMethod() { }", correct: false},
            ]
        },
        {
            question: "Comment créez-vous un objet en Java?",
            answers: [
                { text: "MyClass obj = new MyClass();", correct: true},
                { text: "MyClass obj = MyClass();", correct: false},
                { text: "MyClass obj = new();", correct: false},
                { text: "MyClass obj = MyClass.new();", correct: false},
            ]
        },
        {
            question: "Comment vérifiez-vous si un tableau contient un élément en Java?",
            answers: [
                { text: "Arrays.asList(arr).contains(element)", correct: true},
                { text: "arr.includes(element)", correct: false},
                { text: "arr.contains(element)", correct: false},
                { text: "arr.has(element)", correct: false},
            ]
        },
        {
            question: "Comment bouclez-vous sur une collection en Java?",
            answers: [
                { text: "for (int i = 0; i < collection.size(); i++) { }", correct: true},
                { text: "for (i in collection) { }", correct: false},
                { text: "foreach (int i : collection) { }", correct: false},
                { text: "for i in range(collection.size()) { }", correct: false},
            ]
        },
        {
            question: "Quelle est la bonne façon de manipuler les exceptions en Java?",
            answers: [
                { text: "try { } catch (Exception e) { }", correct: true},
                { text: "try { } except (Exception e) { }", correct: false},
                { text: "try { } catch { }", correct: false},
                { text: "attempt { } handle (Exception e) { }", correct: false},
            ]
        },
        {
            question: "Comment convertissez-vous une chaîne en nombre entier en Java?",
            answers: [
                { text: "Integer.parseInt(str)", correct: true},
                { text: "int(str)", correct: false},
                { text: "parseInt(str)", correct: false},
                { text: "str.toInt()", correct: false},
            ]
        },
        {
            question: "Comment accédez-vous au premier élément d'une liste en Java?",
            answers: [
                { text: "list.get(0)", correct: true},
                { text: "list[0]", correct: false},
                { text: "list.first()", correct: false},
                { text: "list.elementAt(0)", correct: false},
            ]
        },
        {
            question: "Comment déclarez-vous une classe en Java?",
            answers: [
                { text: "public class MyClass { }", correct: true},
                { text: "class MyClass { }", correct: false},
                { text: "MyClass = class { }", correct: false},
                { text: "public MyClass { }", correct: false},
            ]
        },
        {
            question: "Comment héritez-vous d'une classe en Java?",
            answers: [
                { text: "class SubClass extends SuperClass", correct: true},
                { text: "class SubClass inherits SuperClass", correct: false},
                { text: "class SubClass implements SuperClass", correct: false},
                { text: "class SubClass extends SuperClass()", correct: false},
            ]
        },
        {
            question: "Comment définissez-vous une interface en Java?",
            answers: [
                { text: "public interface MyInterface { }", correct: true},
                { text: "interface MyInterface { }", correct: false},
                { text: "public class MyInterface { }", correct: false},
                { text: "interface MyInterface() { }", correct: false},
            ]
        },
        {
            question: "Comment implémentez-vous une interface en Java?",
            answers: [
                { text: "class MyClass implements MyInterface { }", correct: true},
                { text: "class MyClass extends MyInterface { }", correct: false},
                { text: "class MyClass inherits MyInterface { }", correct: false},
                { text: "class MyClass implements MyInterface() { }", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour démarrer un thread en Java?",
            answers: [
                { text: "thread.start()", correct: true},
                { text: "thread.run()", correct: false},
                { text: "thread.begin()", correct: false},
                { text: "thread.execute()", correct: false},
            ]
        },
        {
            question: "Comment synchronisez-vous un bloc de code en Java?",
            answers: [
                { text: "synchronized(this) { }", correct: true},
                { text: "sync(this) { }", correct: false},
                { text: "locked(this) { }", correct: false},
                { text: "synchronize(this) { }", correct: false},
            ]
        },
        {
            question: "Comment définissez-vous une constante en Java?",
            answers: [
                { text: "final int MY_CONSTANT = 10;", correct: true},
                { text: "const int MY_CONSTANT = 10;", correct: false},
                { text: "static int MY_CONSTANT = 10;", correct: false},
                { text: "immutable int MY_CONSTANT = 10;", correct: false},
            ]
        },
        {
            question: "Comment faites-vous une boucle 'while' en Java?",
            answers: [
                { text: "while (condition) { }", correct: true},
                { text: "while condition { }", correct: false},
                { text: "while (condition) do { }", correct: false},
                { text: "while (condition): { }", correct: false},
            ]
        },
        {
            question: "Quelle est la méthode correcte pour créer une instance de classe anonyme en Java?",
            answers: [
                { text: "new MyClass() { }", correct: true},
                { text: "MyClass() { }", correct: false},
                { text: "create MyClass() { }", correct: false},
                { text: "new MyClass { }", correct: false},
            ]
        },
        {
            question: "Comment comparez-vous deux chaînes en Java?",
            answers: [
                { text: "str1.equals(str2)", correct: true},
                { text: "str1 == str2", correct: false},
                { text: "str1.compareTo(str2)", correct: false},
                { text: "str1.isEqual(str2)", correct: false},
            ]
        },
        {
            question: "Comment déclarez-vous une énumération en Java?",
            answers: [
                { text: "enum MyEnum { }", correct: true},
                { text: "enum class MyEnum { }", correct: false},
                { text: "public enum MyEnum { }", correct: false},
                { text: "MyEnum enum { }", correct: false},
            ]
        }
    ]
};

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const menuButton = document.getElementById("menu-btn");
const subjectButtons = document.querySelectorAll("button.small-icon");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

subjectButtons.forEach(button => {
    button.addEventListener("click", () => selectSubject(button.getAttribute("alt")));

});

function shuffleAnswers(question) {
    return question.answers.sort(() => Math.random() - 0.5);
}

function shuffleQuestions(subject) {
    subjects[subject] = subjects[subject].sort(() => Math.random() - 0.5);
}

function selectSubject(subject) {
    currentQuestions = subjects[subject];
    shuffleQuestions(subject);
    startQuiz();
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".quiz").style.display = "block";
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    menuButton.style.display = "none";
    showQuestion();
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressWidth = (currentQuestionIndex + 1) / currentQuestions.length * 100; 
    progressBar.style.width = progressWidth + "%";
}

function showQuestion(){
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "/20. " + currentQuestion.question;
    shuffleAnswers(currentQuestion);
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    updateProgressBar();
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function resetFeedback() {
    const feedback = document.getElementById("feedback");
    const successMessage = document.getElementById("success-message");
    const failureMessage = document.getElementById("failure-message");

    feedback.style.display = "none"; 
    successMessage.style.display = "none";
    failureMessage.style.display = "none";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const feedback = document.getElementById("feedback");
    const successMessage = document.getElementById("success-message");
    const failureMessage = document.getElementById("failure-message");

    feedback.style.display = "block"; 

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        successMessage.style.display = "block";
        failureMessage.style.display = "none";
    } else {
        selectedBtn.classList.add("incorrect");
        successMessage.style.display = "none";
        failureMessage.style.display = "block";
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    let message = "";
    let emoji = "";
    
    if (score <= 5) {
        message = "Ne sois pas triste, tu peux recommencer !.";
        emoji = "😢";
    } else if (score <= 9) {
        message = "Tu y étais presque, retente pour mieux faire !";
        emoji = "😞";
    } else if (score <= 14) {
        message = "Félicitations, tu as réussi le quiz.";
        emoji = "😊";
    } else {
        message = "Bravo, c'est excellent! Tu maitrises";
        emoji = "🎉";
    }
    
    questionElement.innerHTML = `Vous avez obtenu ${score} sur ${currentQuestions.length} !<br>${emoji} ${message}`;
    nextButton.innerHTML = "Rejouer";
    nextButton.style.display = "block";
    menuButton.style.display = "block"; 
}

function handleNextButton() {
    resetFeedback(); 
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

menuButton.addEventListener("click", () => {
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".menu").style.display = "block";
});

startQuiz();