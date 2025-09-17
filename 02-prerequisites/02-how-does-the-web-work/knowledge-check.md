### Knowledge Check Answers 🎯

---

#### Question: What is a web server?

**Answer:** A **web server** is a computer that stores website files (like HTML documents, images, and CSS style sheets) and delivers them to a user's web browser upon request.

**Why:** It's the machine that "serves" the web page to you when you visit a URL. Without web servers, websites would have no place to live.

**Remember:** A web server *serves* web pages, just like a restaurant server brings you your food. 🍽️

---

#### Question: What is a network?

**Answer:** A **network** is a collection of two or more connected computers that can share resources and information.

**Why:** Networks allow devices to communicate, share files, or access a shared resource like a printer or an internet connection.

**Example:** The computers, phones, and smart devices connected to your home Wi-Fi all form a local network.

---

#### Question: What is the internet?

**Answer:** The **internet** is a massive, global "network of networks" that connects billions of computers and other electronic devices worldwide.

**Why:** It's the underlying infrastructure that allows you to send emails, watch videos, and browse websites by letting all these different networks talk to each other.

**Remember:** The internet is the global system of roads; the web is just one type of traffic that uses those roads. 🛣️

---

#### Question: What is an IP address?

**Answer:** An **IP address** (Internet Protocol address) is a unique string of numbers that identifies a specific device on a network.

**Why:** It acts like a mailing address for your computer, telling other devices where to send and receive information (data packets).

**Example:** An IP address looks something like `192.168.1.1` or `142.250.72.238`.

---

#### Question: What is a router?

**Answer:** A **router** is a device that directs data traffic between computer networks, choosing the best path for data to travel.

**Why:** Routers act as the traffic controllers of the internet, ensuring that data packets get from their source to their destination efficiently.

**Example:** Your home Wi--Fi box is a router that directs traffic between the devices in your home and the wider internet.

---

#### Question: What is an ISP?

**Answer:** An **ISP** (Internet Service Provider) is a company that provides you and other customers with access to the internet.

**Why:** You can't connect to the internet directly; you must go through an ISP which is connected to the global network.

**Example:** Common ISPs include Comcast, AT&T, and Verizon.

---

#### Question: What are packets and how are they used to transfer data?

**Answer:** **Packets** are small, manageable chunks of data created when a larger piece of information is broken down for transfer over a network.

**Why:** Sending data in small packets is more reliable and efficient than sending it all in one huge chunk. If one packet gets lost, only that small piece needs to be resent.

**Example:** When you load an image from a website, it is broken into many packets, sent to your browser, and then reassembled to display the final image.

---

#### Question: What is a client?

**Answer:** A **client** is a computer or software program that requests services or resources from a server.

**Why:** In the context of the web, your web browser is the client. It requests web pages from a web server so you can view them.

**Remember:** The **client** makes a request.

---

#### Question: What is a server?

**Answer:** A **server** is a powerful computer or program that provides, or "serves," data and services to other computers (clients) over a network.

**Why:** A server waits for requests from clients and responds by sending the requested data, such as a web page or a file.

**Remember:** The **server** provides the service.

---

#### Question: What is a web page?

**Answer:** A **web page** is a document, usually written in HTML (HyperText Markup Language), that is designed to be viewed in a web browser.

**Why:** Web pages are the fundamental building blocks of websites and contain the content you interact with, like text, images, links, and videos.

---

#### Question: What is a web browser?

**Answer:** A **web browser** is a software application that you use to access and display information on the World Wide Web.

**Why:** It interprets the code (HTML, CSS, JavaScript) sent from a web server and renders it into the visual, interactive web page that you see on your screen.

**Example:** Google Chrome, Mozilla Firefox, and Apple Safari are all web browsers.

---

#### Question: What is a search engine?

**Answer:** A **search engine** is a web-based program that finds and identifies items in a massive database that correspond to keywords or characters specified by the user.

**Why:** It helps you find specific information on the vast World Wide Web by maintaining an index of billions of web pages.

**Example:** Google, Bing, and DuckDuckGo are popular search engines.

---

#### Question: What is a DNS request?

**Answer:** A **DNS request** (Domain Name System request) is the process of translating a human-friendly domain name (like `google.com`) into a computer-friendly IP address (like `142.250.72.238`).

**Why:** DNS acts as the internet's phonebook. It's much easier for people to remember names than long strings of numbers.

**Remember:** **DNS** = Domain **N**ame to Number **S**ystem. 📖

---

#### Question: Which browser are you currently using?

**Answer:** As an AI, I don't use a browser myself, but you can easily find out which one you're on!

**Why:** Look for the name and icon on your screen—common ones are **Chrome**, **Firefox**, **Safari**, and **Edge**. Knowing your browser is important for web development because you sometimes have to account for small differences in how they display websites.

---

#### Question: In your own words, describe the process that takes place when you initiate a search on google.com in terms of what we discussed.

**Answer:** When I want to search for something, the process goes like this:
1.  I type `google.com` into my **web browser** (the **client**). My browser makes a **DNS request** to find the unique **IP address** for Google's servers.
2.  Using that IP address, my browser sends a request for the Google homepage. This request is broken into **packets**, which travel from my computer through my **router**, out to my **ISP**, and across the **internet**'s network of routers.
3.  Google's **web server** receives the request and sends the files for its homepage back to my browser in packets. My browser reassembles them and displays the search page.
4.  I then type my search query and hit enter. My browser sends this new request to Google's **search engine** servers.
5.  Google's servers find all the relevant results and send a brand new **web page**—the search results page—back to my browser for me to view.