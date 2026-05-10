# Concept: Working with the File System (fs module)

## What It Is

The fs (file system) module in Node.js allows you to read, write, create, and delete files and directories on your computer.

## Why It Exists

Servers often need to store and retrieve data. The fs module provides direct access to the computer’s file system to handle that.

## When To Use

- Reading files (config, JSON, logs)
- Writing data to files
- Creating or deleting folders/files
- Handling persistent storage without a database

## Mental Model

fs = your server’s ability to interact with your computer’s storage

## Pattern

    const fs = require("fs")

    fs.method("path", (err, data) => {
      if (err) {
        // handle error
      }
      // use data
    })

## Example

    const fs = require("fs")

    fs.readFile("data.json", (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(data.toString("utf8"))
    })

## Line-by-Line

- line 1: Import file system module
- line 2: Read file asynchronously
- line 3: Check for errors
- line 4: Log error if it exists
- line 5: Stop execution if error
- line 6: Convert buffer to string
- line 7: Log file content

## Common Mistakes

- Forgetting to handle errors
- Not converting Buffer to string
- Using wrong file path

## What Breaks If Done Wrong

- Crashes due to unhandled errors
- Output shows unreadable binary data
- File not found errors

## Real Use Case

- Reading config files
- Loading JSON data
- Reading logs or saved data

## Mini Practice

    const fs = require("fs")

    fs.readFile("test.txt", (err, data) => {
      if (!err) console.log(data.toString())
    })

## Key Takeaway

fs lets your server read data from your machine — always handle errors.

# Additional Concept: Reading Directories (fs.readdir)

## What It Is

fs.readdir() reads all file names inside a directory.

## Why It Exists

Sometimes you need to process multiple files in a folder dynamically.

## When To Use

- Listing files
- Processing multiple uploads
- File management systems

## Mental Model

Directory = folder  
readdir = “show me everything inside this folder”

## Pattern

    fs.readdir("path", (err, files) => {
      // files = array of filenames
    })

## Example

    const fs = require("fs")

    fs.readdir(".", (err, files) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(files)
    })

## Line-by-Line

- line 1: Import fs
- line 2: Read current directory
- line 3: Handle error
- line 4: Log list of files

## Common Mistakes

- Wrong directory path
- Ignoring errors

## What Breaks If Done Wrong

- Cannot access directory
- Empty or incorrect results

## Real Use Case

- File managers
- Processing uploaded files
- Dynamic content loading

## Mini Practice

    fs.readdir("./", (err, files) => {
      console.log(files.length)
    })

## Key Takeaway

readdir gives you all files inside a folder.

# Additional Concept: Writing Files (fs.writeFile)

## What It Is

fs.writeFile() creates or overwrites a file with new data.

## Why It Exists

Servers often need to store or update data.

## When To Use

- Saving user data
- Writing logs
- Creating files

## Mental Model

writeFile = replace or create file with new content

## Pattern

    fs.writeFile("file", "data", (err) => {
      // done
    })

## Example

    const fs = require("fs")

    fs.writeFile("data.json", JSON.stringify([1, 2, 3]), (err) => {
      if (err) console.log(err)
    })

## Line-by-Line

- line 1: Import fs
- line 2: Write JSON data to file
- line 3: Handle errors

## Common Mistakes

- Forgetting JSON.stringify
- Overwriting important files
- Ignoring errors

## What Breaks If Done Wrong

- Data corruption
- Invalid JSON files
- Lost data

## Real Use Case

- Saving app data
- Logging activity
- Writing config files

## Mini Practice

    fs.writeFile("test.txt", "Hello", () => {})

## Key Takeaway

writeFile overwrites — be careful when using it.

# Additional Concept: Creating and Deleting Files (fs.mkdir & fs.unlink)

## What It Is

fs.mkdir() creates directories, and fs.unlink() deletes files.

## Why It Exists

Applications often need to manage file structures dynamically.

## When To Use

- Creating folders
- Deleting files
- Managing uploads

## Mental Model

mkdir = create folder  
unlink = delete file

## Pattern

    fs.mkdir("folder", callback)
    fs.unlink("file", callback)

## Example

    const fs = require("fs")

    fs.mkdir("newFolder", (err) => {
      if (err) console.log(err)
    })

    fs.unlink("data.json", (err) => {
      if (err) console.log(err)
    })

## Line-by-Line

- line 1: Import fs
- line 2: Create directory
- line 3: Handle error
- line 4: Delete file
- line 5: Handle error

## Common Mistakes

- Trying to delete non-existent files
- Not handling errors
- Wrong paths

## What Breaks If Done Wrong

- Errors thrown
- Files not created/deleted

## Real Use Case

- File upload systems
- Temporary file cleanup
- User-generated content

## Mini Practice

    fs.unlink("temp.txt", () => {})

## Key Takeaway

You can programmatically manage files and folders.

# Additional Concept: Promises with fs (fs.promises)

## What It Is

fs.promises provides promise-based versions of file system methods.

## Why It Exists

Callbacks can become messy. Promises make async code cleaner.

## When To Use

- Modern Node.js apps
- Async/await workflows
- Cleaner code structure

## Mental Model

Callbacks = old style  
Promises = modern clean flow

## Pattern

    const fs = require("fs").promises

    fs.readFile("file")
      .then(data => {})
      .catch(err => {})

## Example

    const fs = require("fs").promises

    fs.readFile("data.json", { encoding: "utf8" })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })

## Line-by-Line

- line 1: Import promise-based fs
- line 2: Read file
- line 3: Handle success
- line 4: Log data
- line 5: Handle errors

## Common Mistakes

- Forgetting .catch()
- Mixing callbacks and promises
- Not awaiting async calls

## What Breaks If Done Wrong

- Unhandled promise rejections
- Hard-to-debug async issues

## Real Use Case

- Async file operations
- Clean backend logic
- Using async/await

## Mini Practice

    const fs = require("fs").promises
    fs.readFile("test.txt").then(console.log)

## Key Takeaway

Use fs.promises for cleaner async code.

# Additional Concept: File Paths (\_\_dirname & path module)

## What It Is

\_\_dirname gives the current file’s directory, and the path module helps safely build file paths.

## Why It Exists

Relative paths can break depending on where the app is run from. These tools ensure correct file resolution.

## When To Use

- Accessing files reliably
- Working across different environments
- Avoiding path bugs

## Mental Model

\_\_dirname = where THIS file lives  
path = safe path builder

## Pattern

    const path = require("path")

    const filePath = path.join(__dirname, "file.txt")

## Example

    const fs = require("fs")
    const path = require("path")

    const filePath = path.join(__dirname, "data.json")

    fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
      console.log(data)
    })

## Line-by-Line

- line 1: Import fs
- line 2: Import path module
- line 3: Build safe file path
- line 4: Read file using correct path
- line 5: Log data

## Common Mistakes

- Using relative paths incorrectly
- Concatenating strings for paths
- Ignoring OS differences

## What Breaks If Done Wrong

- File not found errors
- App works locally but fails in production

## Real Use Case

- Reading config files
- Serving static files
- File uploads/downloads

## Mini Practice

    const path = require("path")
    console.log(path.join(__dirname, "test.txt"))

## Key Takeaway

Always use \_\_dirname + path.join for reliable file access.
