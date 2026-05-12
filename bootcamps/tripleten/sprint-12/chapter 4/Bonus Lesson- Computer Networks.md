# Concept: Computer Networks (Backend Perspective)

## What It Is

A computer network is a system of interconnected devices that communicate with each other using standardized protocols to send and receive data.

## Why It Exists

Without networks, computers would be isolated. Networks allow devices to share data, access servers, and communicate globally (internet).

## When To Use

- Anytime your app communicates with a server
- Sending/receiving API requests
- Loading websites or apps
- Real-time communication (chat, streaming)

## Mental Model

Internet = massive delivery system

Your device → sends request → travels through networks → reaches server → server responds → data comes back

## Pattern

    Device → Router → ISP → Internet → Server
    Server → Internet → ISP → Router → Device

## Example

    fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(data => console.log(data))

## Line-by-Line

- line 1: Send request to server
- line 2: Convert response to usable data
- line 3: Log received data

## Common Mistakes

- Thinking devices talk directly to servers
- Ignoring network layers
- Assuming instant communication

## What Breaks If Done Wrong

- Misunderstanding request flow
- Poor backend architecture decisions

## Real Use Case

- API calls in frontend apps
- Backend services communicating with databases

## Mini Practice

    fetch("https://jsonplaceholder.typicode.com/users")

## Key Takeaway

Every request your app makes travels through multiple network layers.

# Additional Concept: IP Addresses (Public vs Private)

## What It Is

An IP address is a unique identifier assigned to each device on a network.

## Why It Exists

Devices need a way to locate and communicate with each other across networks.

## When To Use

- Making network requests
- Configuring servers
- Debugging network issues

## Mental Model

IP address = home address for a device

## Pattern

    Public IP → visible on internet
    Private IP → used inside local network

## Example

    77.88.55.50  // public example
    192.168.1.1  // private example

## Line-by-Line

- line 1: Public IP used globally
- line 2: Private IP used locally

## Common Mistakes

- Confusing public vs private IP
- Thinking private IP works globally

## What Breaks If Done Wrong

- Cannot connect to server
- Network misconfiguration

## Real Use Case

- Hosting servers
- Router configuration
- Local network communication

## Mini Practice

    console.log("My IP identifies me on the network")

## Key Takeaway

IP addresses uniquely identify devices in a network.

# Additional Concept: DHCP (Dynamic IP Assignment)

## What It Is

DHCP automatically assigns IP addresses to devices when they connect to a network.

## Why It Exists

Manually assigning IPs would be inefficient and error-prone.

## When To Use

- Connecting devices to Wi-Fi
- Managing network configurations

## Mental Model

DHCP = automatic address assignment system

## Pattern

    Device connects → DHCP assigns IP

## Example

    // happens automatically when connecting to Wi-Fi

## Line-by-Line

- line 1: Device joins network
- line 2: DHCP assigns IP

## Common Mistakes

- Expecting static IPs always
- Not understanding IP changes

## What Breaks If Done Wrong

- Connectivity issues
- IP conflicts

## Real Use Case

- Home networks
- Office environments

## Mini Practice

    console.log("IP assigned dynamically")

## Key Takeaway

DHCP automatically gives devices IP addresses.

# Additional Concept: DNS (Domain Name System)

## What It Is

DNS translates human-readable domain names (like google.com) into IP addresses.

## Why It Exists

Humans cannot remember IP addresses easily, so DNS acts as a translator.

## When To Use

- Accessing websites
- Making API requests
- Hosting domains

## Mental Model

DNS = phonebook of the internet

## Pattern

    domain → DNS lookup → IP address

## Example

    google.com → 142.250.72.14

## Line-by-Line

- line 1: Domain name
- line 2: Converted to IP

## Common Mistakes

- Thinking domain = server directly
- Ignoring DNS resolution step

## What Breaks If Done Wrong

- Cannot access websites
- Incorrect routing

## Real Use Case

- Browsers loading websites
- API calls resolving domains

## Mini Practice

    console.log("DNS resolves names to IPs")

## Key Takeaway

DNS converts names into addresses machines understand.

# Additional Concept: Routing (How Data Travels)

## What It Is

Routing determines the path data takes through the network from source to destination.

## Why It Exists

Devices are not directly connected, so data must pass through intermediate nodes.

## When To Use

- Sending requests across networks
- Debugging network paths

## Mental Model

Routing = GPS for data packets

## Pattern

    Device → Router → Node → Node → Server

## Example

    traceroute google.com

## Line-by-Line

- line 1: Shows path data takes

## Common Mistakes

- Assuming direct connection
- Ignoring intermediate hops

## What Breaks If Done Wrong

- Slow or failed requests
- Network inefficiencies

## Real Use Case

- Internet traffic
- CDN routing
- Backend communication

## Mini Practice

    console.log("Data travels through multiple nodes")

## Key Takeaway

Data does not go straight — it hops through networks.

# Additional Concept: TCP (Reliable Communication)

## What It Is

TCP is a protocol that ensures reliable data delivery between devices.

## Why It Exists

Data can be lost or arrive out of order — TCP guarantees correct delivery.

## When To Use

- Web browsing (HTTP/HTTPS)
- APIs
- Reliable communication

## Mental Model

TCP = tracked delivery (like certified mail)

## Pattern

    SYN → SYN-ACK → ACK (handshake)

## Example

    Client connects to server → handshake → data transfer

## Line-by-Line

- line 1: Client sends request
- line 2: Server acknowledges
- line 3: Connection established

## Common Mistakes

- Ignoring connection setup
- Confusing TCP with HTTP

## What Breaks If Done Wrong

- Data loss
- Connection failures

## Real Use Case

- Web requests
- Database communication

## Mini Practice

    console.log("TCP ensures reliable delivery")

## Key Takeaway

TCP guarantees data arrives correctly and in order.

# Additional Concept: TCP/IP Model (Network Layers)

## What It Is

The TCP/IP model defines how data travels across networks using four layers.

## Why It Exists

Breaking communication into layers makes systems modular and scalable.

## When To Use

- Understanding networking fundamentals
- Debugging network issues
- Backend/system design

## Mental Model

Each layer has a job:

- Application → user interaction
- Transport → data delivery
- Network → routing
- Data Link → physical transmission

## Pattern

    Application → Transport → Network → Data Link

## Example

    HTTP → TCP → IP → Ethernet

## Line-by-Line

- line 1: Application layer (HTTP)
- line 2: Transport layer (TCP)
- line 3: Network layer (IP)
- line 4: Data link layer (Ethernet)

## Common Mistakes

- Mixing up layers
- Thinking protocols do everything

## What Breaks If Done Wrong

- Misunderstanding system design
- Harder debugging

## Real Use Case

- Web apps
- APIs
- Network troubleshooting

## Mini Practice

    console.log("Data flows through layered systems")

## Key Takeaway

Networking is layered — each layer has a specific responsibility.
