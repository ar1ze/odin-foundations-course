### Knowledge Check Answers 🎯

-----

#### Question: How do you open developer tools?

**Answer:** You can **right-click** on a webpage and choose **"Inspect"**, or use a keyboard shortcut like **F12** or **Ctrl+Shift+I** (on Windows) / **Cmd+Opt+I** (on Mac).

**Why:** These are the standard built-in methods for accessing the developer tools in all modern web browsers like Chrome and Firefox.

-----

#### Question: How do you change screen size of a website using developer tools?

**Answer:** After opening the developer tools, you click the **"Toggle device toolbar"** icon, which typically looks like a small phone and tablet.

**Why:** This activates the responsive design mode, which provides a toolbar where you can manually enter a width and height or select from a list of preset device sizes to test how your site looks.

**Remember:** Look for the **phone and tablet icon** to start testing different screen sizes. 📱

-----

#### Question: What is a breakpoint?

**Answer:** A **breakpoint** is a point (a specific screen width) at which a website's layout and styling will change to adapt to the screen size.

**Why:** Breakpoints are the foundation of responsive design. They allow you to define different CSS rules for different devices, ensuring your site looks good on a desktop, tablet, or phone.

**Example:** A site might have a three-column layout on a large screen, but a breakpoint at 768px could trigger a media query that restyles it into a two-column layout for tablets.

-----

#### Question: How do you set a breakpoint?

**Answer:** You set breakpoints in your CSS using **media queries**.

**Why:** A media query is a CSS rule that applies a block of styles only when a certain condition is met, such as the screen's width being above or below a specific value.

**Example:**

```css
/* This is a breakpoint. These styles will only apply
   when the screen is 600px wide or less. */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```