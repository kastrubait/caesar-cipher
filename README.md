# caesar-cipher

> **Сaesar-cipher** will help you encrypt latin symbols of a given string. This will be done by shifting all letters N positions to the right (encode) or to the left (decode).

#### Installation and Start
> 1. Clone the repository
    **git clone** https://github.com/kastrubait/caesar-cipher.git
> 2. Go to the directory:
    **cd caesar-cipher**
> 3. Install node_modules:
   **npm install -g**
> 4. Start:
    **caesar_cipher_cli** `[options]`

#### Options
> Each option can have a short flag (single character) and a long name. Options on the command line are not positional, and can be specified before or after other command arguments. You can view options using the command  **caesar_cipher_cli  --help**

 >>**-a, --action <string>**, action takes the values: (encode/decode), require  
 >>**-s, --shift <number>**, shift must be a positive number, require   
 >>**-i, --input <string>**, input sets the path to the file, by default "input.txt"  
 >>**-o, --output <string>**, output sets the path to the file, by default "output.txt"  
 >>**-h, --help**, display help for command
 
 #### Example  
 > `> caesar_cipher_cli -a encode -s 7 -i input.txt -o output.txt`  
 > `> caesar_cipher_cli --action encode --shift 7 --input "C:\Work\plain.txt" --output "C:\Work\encoded.txt"`   
 > `> caesar_cipher_cli --action decode --output plain.txt -shift 7` 
 
 > If all arguments are passed, the application reads from the file and writes the encrypted / decrypted text to the file
 
 #### Exit  
 > Finish work with **Сaesar-cipher** - **Сtrl+C** or **Ctrl+D**
