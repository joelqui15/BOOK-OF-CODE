# Concept: Streams for Reading and Writing Files

## What It Is

Streams in Node.js allow you to read or write data piece-by-piece (in chunks) instead of loading everything into memory at once.

## Why It Exists

Loading large files entirely into memory is slow and inefficient. Streams solve this by processing data in chunks, improving performance and memory usage.

## When To Use

- Working with large files (videos, logs, uploads)
- File transfers
- Streaming data between sources (file → file, request → file)
- Real-time data processing

## Mental Model

Instead of downloading a whole movie first…

Streams = watching the movie while it’s still downloading

You process data as it arrives.

## Pattern

    const reader = fs.createReadStream("input")
    const writer = fs.createWriteStream("output")

    reader.on("data", (chunk) => {
      writer.write(chunk)
    })

    reader.on("end", () => {
      writer.end()
    })

## Example

    const fs = require("fs")

    const reader = fs.createReadStream("in.txt", { encoding: "utf8" })
    const writer = fs.createWriteStream("out.txt", { encoding: "utf8" })

    reader.on("data", (chunk) => {
      writer.write(chunk)
    })

    reader.on("end", () => {
      writer.end()
    })

## Line-by-Line

- line 1: Import fs module
- line 2: Create readable stream from file
- line 3: Create writable stream to file
- line 4: Listen for incoming chunks
- line 5: Write chunk to output file
- line 6: Detect when reading is complete
- line 7: Close writable stream

## Common Mistakes

- Forgetting to call writer.end()
- Not handling errors
- Using streams for small files unnecessarily

## What Breaks If Done Wrong

- File not fully written
- Memory leaks
- Crashes on errors

## Real Use Case

- Uploading files
- Copying large files
- Streaming video/audio

## Mini Practice

    const fs = require("fs")

    const reader = fs.createReadStream("a.txt")
    const writer = fs.createWriteStream("b.txt")

    reader.on("data", (chunk) => {
      writer.write(chunk)
    })

    reader.on("end", () => {
      writer.end()
    })

## Key Takeaway

Streams process data in chunks, making large file handling efficient.

# Additional Concept: Stream Types (Readable, Writable, Duplex, Transform)

## What It Is

Streams come in four types based on what they can do.

## Why It Exists

Different use cases require different stream capabilities.

## When To Use

- Readable → reading data
- Writable → writing data
- Duplex → both read and write
- Transform → modify data while passing it

## Mental Model

Readable = input  
Writable = output  
Duplex = both  
Transform = modify while flowing

## Pattern

    readableStream.on("data", callback)
    writableStream.write(data)

## Example

    const reader = fs.createReadStream("file.txt")
    const writer = fs.createWriteStream("copy.txt")

## Line-by-Line

- line 1: Create readable stream
- line 2: Create writable stream

## Common Mistakes

- Using wrong stream type
- Not connecting streams properly

## What Breaks If Done Wrong

- Data not transferred
- Unexpected behavior

## Real Use Case

- File copy (readable → writable)
- Compression (transform stream)

## Mini Practice

    const reader = fs.createReadStream("test.txt")

## Key Takeaway

Each stream type has a specific role in data flow.

# Additional Concept: Handling Stream Events (data, end, error)

## What It Is

Streams emit events like "data", "end", and "error" to signal their state.

## Why It Exists

Streams are asynchronous — events notify you when something happens.

## When To Use

- Processing incoming chunks
- Detecting completion
- Handling failures

## Mental Model

Events = notifications from the stream

## Pattern

    stream.on("data", handler)
    stream.on("end", handler)
    stream.on("error", handler)

## Example

    reader.on("data", (chunk) => {
      console.log(chunk)
    })

    reader.on("end", () => {
      console.log("Done")
    })

    reader.on("error", (err) => {
      console.log(err)
    })

## Line-by-Line

- line 1: Listen for chunk data
- line 2: Handle chunk
- line 3: Listen for completion
- line 4: Handle completion
- line 5: Listen for errors
- line 6: Handle errors

## Common Mistakes

- Ignoring error events
- Not handling end event
- Assuming sync execution

## What Breaks If Done Wrong

- Crashes on errors
- Incomplete processing
- Hard-to-debug issues

## Real Use Case

- File streaming
- API streaming responses
- Upload handling

## Mini Practice

    reader.on("error", (err) => console.log(err))

## Key Takeaway

Streams rely on events — you must handle them.

# Additional Concept: pipe() Method (Simplified Streams)

## What It Is

pipe() connects a readable stream directly to a writable stream automatically.

## Why It Exists

Manual event handling is repetitive. pipe() simplifies the process and handles errors internally.

## When To Use

- Copying files
- Streaming data directly
- Simplifying stream logic

## Mental Model

pipe = connect source → destination instantly

## Pattern

    readable.pipe(writable)

## Example

    const fs = require("fs")

    const reader = fs.createReadStream("in.txt")
    const writer = fs.createWriteStream("out.txt")

    reader.pipe(writer)

## Line-by-Line

- line 1: Create readable stream
- line 2: Create writable stream
- line 3: Pipe data directly

## Common Mistakes

- Trying to pipe writable → readable
- Not understanding direction of flow

## What Breaks If Done Wrong

- Errors due to incorrect stream types
- Data not transferred

## Real Use Case

- File copying
- Streaming uploads/downloads
- HTTP request piping

## Mini Practice

    reader.pipe(writer)

## Key Takeaway

pipe() is the easiest and safest way to connect streams.

# Additional Concept: Streams vs readFile (Performance)

## What It Is

Streams process data in chunks, while readFile loads everything into memory first.

## Why It Exists

Large files can crash or slow apps if fully loaded into memory.

## When To Use

- Streams → large files, performance critical
- readFile → small files, simple logic

## Mental Model

readFile = load entire book  
stream = read page by page

## Pattern

    fs.readFile("file")   // full load
    fs.createReadStream() // chunked

## Example

    // slow for large files
    fs.readFile("big.txt", (err, data) => {})

    // efficient
    fs.createReadStream("big.txt")

## Line-by-Line

- line 1: Loads full file into memory
- line 2: Streams file in chunks

## Common Mistakes

- Using readFile for large files
- Not understanding memory impact

## What Breaks If Done Wrong

- High memory usage
- Slow performance
- Possible crashes

## Real Use Case

- Video streaming
- File uploads
- Large data processing

## Mini Practice

    const stream = fs.createReadStream("large.txt")

## Key Takeaway

Streams are for performance — use them when data is large.
