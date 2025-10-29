# 🗂️ NodeJS File Manager

A simple **file manager built with Node.js**, providing an interactive command-line interface to perform common file operations such as reading, writing, renaming, copying, moving, deleting, hashing, and compressing/decompressing files, and to get the information about the operating system. This project created according to the requirements of the Rolling Scopes School NodeJS 2025 Q4 Course task.

### 🔗 Links:

- [RS School](https://rs.school/)
- [NodeJS Course](https://github.com/rolling-scopes-school/tasks/blob/master/node/README.md)
- [File Manager task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)

---

## 🚀 Features

- 📁 **File Operations**
  - Create, read, rename, move, and delete files or directories
- 🔑 **File Hashing**
  - Generate SHA-256 hash for files
- 🗜️ **Compression**
  - Compress and decompress files using Brotli
- 📂 **Directory Navigation**
  - Navigate through directories and list their contents
- 💬 **Command-based Interface**
  - Interactive CLI that accepts user commands for operations
- 💻 **Operating System Information**
  - Show User information, CPU details, and System architecture

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- Built-in Node modules:
  - `fs` – file system operations
  - `path` – path manipulation
  - `os` – system information
  - `crypto` – hashing
  - `zlib` – compression/decompression
  - `readline` – interactive command-line interface

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andriihordov/node-file-manager.git
   cd node-file-manager
   ```
2. **Run the application**
   ```
   node index.js
   ```

## 🛡️ License

This project is licensed under the ISC License.

The ISC license is a simple, permissive open-source license. It is functionally equivalent to the MIT license, allowing you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, provided you include the original copyright notice and permission notice in all copies.

Key Points:
You must include a copy of the license text (found in the root LICENSE file) and the copyright notice with your redistribution.

The software is provided "AS IS" and comes with no warranty or guarantee of fitness for any purpose.

For the full text, see the LICENSE file in this repository.

## 🧭 Usage

Once started, you can type commands in the terminal.
Example:

    Welcome to the File Manager, YourName!
    You are currently in /home/YourName

    > ls
    > cat file.txt
    > add newfile.txt
    > rn old.txt new.txt
    > cp file.txt ./backup
    > mv file.txt ./archive
    > rm file.txt
    > hash file.txt
    > compress file.txt file.txt.br
    > decompress file.txt.br file.txt
    > os --architecture
    > up
    > cd ./some-folder
    > exit

## 🧩 Available Commands

| Command                             | Description                                                                                                                     | Example                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `add <file>`                        | Create a new empty file                                                                                                         | `add new.txt`                     |
| `cat <file>`                        | Read file content                                                                                                               | `cat notes.txt`                   |
| `cd <path>`                         | Change current directory                                                                                                        | `cd ..`                           |
| `compress <source> <destination>`   | Compress file using Brotli                                                                                                      | `compress file.txt file.txt.br`   |
| `cp <source> <destination>`         | Copy file                                                                                                                       | `cp file.txt ./backup`            |
| `decompress <source> <destination>` | Decompress a Brotli file                                                                                                        | `decompress file.txt.br file.txt` |
| `exit`                              | Exit the file manager                                                                                                           | `exit`                            |
| `hash <file>`                       | Calculate SHA-256 hash of a file                                                                                                | `hash data.bin`                   |
| `ls`                                | List files and folders in the current directory                                                                                 | `ls`                              |
| `mv <source> <destination>`         | Move file                                                                                                                       | `mv file.txt ./archive`           |
| `os <option>`                       | Get EOL (default system End-Of-Line) and print it to console                                                                    | `os --EOL`                        |
| `os <option>`                       | Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console | `os --cpus`                       |
| `os <option>`                       | Get home directory and print it to console                                                                                      | `os --homedir`                    |
| `os <option>`                       | Get current system user name                                                                                                    | `os --username`                   |
| `os <option>`                       | Get CPU architecture for which Node.js binary has compiled and print it to console                                              | `os --architecture`               |
| `rm <file>`                         | Delete file                                                                                                                     | `rm unwanted.txt`                 |
| `rn <old> <new>`                    | Rename a file                                                                                                                   | `rn old.txt new.txt`              |
| `up`                                | Go up one directory level                                                                                                       | `up`                              |

## ⚙️ Project Structure

    node-file-manager/
    ├── src/
    │   ├── modules/
    │   │   ├── fs/
    │   │   │   ├── add.js
    │   │   │   ├── cat.js
    │   │   │   ├── cp.js
    │   │   │   ├── ls.js
    │   │   │   ├── mkdir.js
    │   │   │   ├── mv.js
    │   │   │   ├── rn.js
    │   │   │   └── rm.js
    │   │   ├── navigation/
    │   │   │   ├── cd.js
    │   │   │   └── up.js
    │   │   ├── hash/
    │   │   │   └── hash.js
    │   │   ├── zip/
    │   │   │   ├── compress.js
    │   │   │   └── decompress.js
    │   │   ├── os/
    │   │   │   └── os.js
    │   ├── utils/
    │   │   ├── helpers.js
    │   │   └── constants.js
    │   └── fileManager.js
    ├── LICENSE
    ├── package.json
    └── README.md

🧪 Example Output

```
> ls
> 📁 folder1
> 📁 folder2
> 📄 notes.txt
> 📄 data.json
> You are currently in path_to_working_directory

> hash notes.txt
> Hash (SHA-256): e3b0c44298fc1c149afbf4c8996fb924...
> You are currently in path_to_working_directory

> compress notes.txt notes.txt.br
> File compressed successfully!
> You are currently in path_to_working_directory
```

## 🧰 Requirements

Node.js v24+

Cross-platform support (Windows / macOS / Linux)

## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

Fork the project

Create your feature branch (git checkout -b feature/my-feature)

Commit changes (git commit -m 'Add feature')

Push to branch (git push origin feature/my-feature)

Open a Pull Request

## 💡 Author

Developed by Andrii Hordov

🚀 Built with Node.js and a love for clean CLI tools.
