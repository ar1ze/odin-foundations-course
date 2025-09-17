# Links and Images 🔗📸

## Introduction
Links are a fundamental feature of HTML, enabling navigation between web pages. This lesson covers creating links and embedding images to enhance web page aesthetics.

***

## Lesson Overview
* Creating links to external websites.
* Creating links to internal pages within your own website.
* Distinguishing between **absolute** and **relative links**.
* Displaying images on a webpage using HTML.

***

## Anchor Elements `<a>`
* Use the `<a>` tag to create a link.
* The **href** (hypertext reference) attribute specifies the destination URL.
* Without an `href`, an anchor tag acts like plain text.
* With an `href`, the text is typically blue and underlined.
* You can link to various online resources, including HTML documents, videos, and PDFs.

***

## Opening Links in a New Tab
* The **target** attribute controls where the linked resource opens.
* `target="_self"` (default): Opens the link in the current tab.
* `target="_blank"`: Opens the link in a new tab or window.
* The **rel** attribute provides security and privacy.
    * `rel="noopener"`: Prevents the new page from accessing the original page via JavaScript, mitigating **tabnabbing** (a type of phishing attack).
    * `rel="noreferrer"`: Provides security and privacy by preventing the new page from knowing the referring page's address.
    * It is recommended to use `rel="noopener noreferrer"` with `target="_blank"`.

***

## Absolute and Relative Links
* **Absolute links**: Link to pages on other websites. They include the full URL, such as `scheme://domain/path`. Example: `https://www.theodinproject.com/about`.
* **Relative links**: Link to pages within the same website. They only include the file path relative to the current page, not the domain name.
* To navigate up to a parent directory in a relative file path, use `../`.

***

## Images `<img>`
* The `<img>` element is a **void element**, meaning it doesn't have a closing tag.
* The **src** attribute specifies the location of the image file. It can use both absolute and relative paths.
* The **alt** (alternative text) attribute is required for accessibility and describes the image. It is displayed if the image cannot be loaded and is used by screen readers for visually impaired users.
* The **width** and **height** attributes help the browser with page layout and are good practice to include.
* **Image formats**: The four main web image formats are JPEG, PNG, GIF, and SVG.

***

## Knowledge Check 🧠
* **What element is used to create a link?** The `<a>` (anchor) element.
* **What is an attribute?** An attribute provides additional information to an HTML element.
* **What attribute tells links where to go?** The **href** attribute.
* **What security considerations are needed for links opening in a new tab?** Use the `rel="noopener noreferrer"` attribute to prevent security risks like **tabnabbing**.
* **What's the difference between an absolute and relative link?** An absolute link is a full URL to an external site, while a relative link is a file path to a page on the same site.
* **What element is used to display an image?** The `<img>` element.
* **What two attributes should images always have?** **src** and **alt**.
* **How do you access a parent directory in a filepath?** Use `../`.
* **What are the four main image formats?** JPEG, PNG, GIF, and SVG.