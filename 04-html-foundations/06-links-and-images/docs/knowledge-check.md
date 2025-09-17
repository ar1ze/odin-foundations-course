### Knowledge Check Answers 🎯

---

#### Question: What element is used to create a link?

**Answer:** The `<a>` element, which stands for "anchor," is used to create a link.

**Why:** You wrap the text or image that you want to be clickable in `<a>` tags and use attributes to tell the browser where the link should go.

**Example:** `<a href="https://www.google.com">Go to Google</a>`

---

#### Question: What is an attribute?

**Answer:** An **attribute** provides additional information about an HTML element and is always included in the opening tag.

**Why:** Attributes modify an element's default behavior or provide metadata. They consist of a name and a value, like `name="value"`.

**Example:** In `<a href="about.html">`, `href` is the attribute that tells the anchor tag its destination.

---

#### Question: What attribute tells links where to go to?

**Answer:** The `href` attribute specifies the destination URL of a link.

**Why:** `href` stands for **h**ypertext **ref**erence. Its value is the web address the browser will navigate to when the link is clicked.

---

#### Question: What security considerations must be taken if you wish to use the target attribute to open links in a new tab/window?

**Answer:** You must add `rel="noopener noreferrer"` to the `<a>` tag.

**Why:** This prevents the newly opened page from being able to manipulate the original page through a potential security vulnerability.

**Example:** `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example Site</a>`

---

#### Question: What is the difference between an absolute and relative link?

**Answer:** An **absolute** link is a complete URL that points to an external website. A **relative** link is a shorthand path that points to a file within your own website's structure.

**Why:** Use absolute links for external sites and relative links for internal pages. Relative links are shorter and won't break if you move your site to a new domain.

**Example:**
* **Absolute:** `https://www.theodinproject.com/about`
* **Relative:** `/about.html`

---

#### Question: Which element is used to display an image?

**Answer:** The `<img>` element is used to display an image.

**Why:** This is a self-closing (or void) element that embeds an image into your document from a specified source file.

---

#### Question: What two attributes do images always need to have?

**Answer:** Every `<img>` tag must have a **`src`** (source) attribute and an **`alt`** (alternative text) attribute.

**Why:** The `src` attribute provides the path to the image file so the browser can find it. The `alt` attribute provides a text description for screen readers and is displayed if the image fails to load, ensuring accessibility.

**Example:** `<img src="images/cat.jpg" alt="A fluffy orange cat sleeping">`

---

#### Question: How do you access a parent directory in a filepath?

**Answer:** You use two dots (`..`) in the filepath to move up one level to the parent directory.

**Why:** This is a standard way to navigate the file system. Each `../` in a path moves you up one folder from your current location.

**Example:** If you are in `/project/html/`, the path `../css/style.css` will access a file in `/project/css/`.

---

#### Question: What are the four main image formats that you can use for images on the web?

**Answer:** The four main image formats are **JPG** (or JPEG), **PNG**, **GIF**, and **SVG**.

**Why:** Each is used for different purposes: **JPG** for photographs, **PNG** for graphics needing transparency, **GIF** for simple animations, and **SVG** for scalable logos and icons.