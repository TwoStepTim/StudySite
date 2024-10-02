const questions = [
// Lesson 1: Core fundamentals of web design and development
    {
        question: "What is the purpose of HTML in web development?",
        answers: [
            { text: "To style the webpage", correct: false },
            { text: "To structure content on the webpage", correct: true },
            { text: "To add interactivity to the webpage", correct: false },
            { text: "To store data", correct: false }
        ]
    },
    {
        question: "Which technology is responsible for the structure of a website?",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "CSS", correct: false },
            { text: "HTML", correct: true },
            { text: "PHP", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "Hyperlinks Text Markup Language", correct: false },
            { text: "Hyperlinking Text Marking Language", correct: false },
            { text: "HighText Machine Language", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a paragraph in HTML?",
        answers: [
            { text: "<p>", correct: true },
            { text: "<paragraph>", correct: false },
            { text: "<para>", correct: false },
            { text: "<text>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<hyperlink>", correct: false }
        ]
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        answers: [
            { text: "<h6>", correct: false },
            { text: "<header>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<heading>", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        answers: [
            { text: "<ul>", correct: true },
            { text: "<ol>", correct: false },
            { text: "<list>", correct: false },
            { text: "<unordered>", correct: false }
        ]
    },
    {
        question: "Which of the following is used for styling websites?",
        answers: [
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: false },
            { text: "CSS", correct: true },
            { text: "PHP", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the color of text?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false }
        ]
    },
    {
        question: "Which technology is used to make a website interactive?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },
    {
        question: "Which of the following tags is used to insert an image in HTML?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<pic>", correct: false },
            { text: "<photo>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "style", correct: true },
            { text: "class", correct: false },
            { text: "id", correct: false },
            { text: "css", correct: false }
        ]
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        answers: [
            { text: "<td>", correct: false },
            { text: "<th>", correct: false },
            { text: "<tr>", correct: true },
            { text: "<table>", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct syntax for linking an external CSS file?",
        answers: [
            { text: "<link rel='stylesheet' href='styles.css'>", correct: true },
            { text: "<style src='styles.css'>", correct: false },
            { text: "<css link='styles.css'>", correct: false },
            { text: "<stylesheet src='styles.css'>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify the destination URL for a hyperlink?",
        answers: [
            { text: "src", correct: false },
            { text: "href", correct: true },
            { text: "link", correct: false },
            { text: "url", correct: false }
        ]
    },
//Lesson 2: Website Navigation, Page Structure, and WAI-ARIA roles
    {
        question: "Which HTML tag is best used for marking up the main navigation of a website?",
        answers: [
            { text: "<nav>", correct: true },
            { text: "<header>", correct: false },
            { text: "<section>", correct: false },
            { text: "<footer>", correct: false }
        ]
    },
    {
        question: "What does WAI-ARIA stand for?",
        answers: [
            { text: "Web Accessibility Initiative - Accessible Rich Internet Applications", correct: true },
            { text: "Web Applications Integration - Accessibility Roles Interface Applications", correct: false },
            { text: "Web Accessibility Interface - Applications Rich Internet Access", correct: false },
            { text: "Wide Access Internet - Accessible Rich Interface Applications", correct: false }
        ]
    },
    {
        question: "Which attribute is used to define ARIA roles in HTML?",
        answers: [
            { text: "role", correct: true },
            { text: "aria-role", correct: false },
            { text: "alt-role", correct: false },
            { text: "data-role", correct: false }
        ]
    },
    {
        question: "What is the purpose of using ARIA roles in web development?",
        answers: [
            { text: "To enhance the accessibility of web content", correct: true },
            { text: "To define CSS styles", correct: false },
            { text: "To add JavaScript functionality", correct: false },
            { text: "To manage file uploads", correct: false }
        ]
    },
    {
        question: "Which of the following is a correct ARIA role for a navigation bar?",
        answers: [
            { text: "role='navigation'", correct: true },
            { text: "role='navbar'", correct: false },
            { text: "role='menu'", correct: false },
            { text: "role='linkbar'", correct: false }
        ]
    },
    {
        question: "Which element is most suitable for grouping links in a navigation bar?",
        answers: [
            { text: "<ul>", correct: true },
            { text: "<div>", correct: false },
            { text: "<span>", correct: false },
            { text: "<section>", correct: false }
        ]
    },
    {
        question: "Which tag is used to mark up the header section of a webpage?",
        answers: [
            { text: "<header>", correct: true },
            { text: "<head>", correct: false },
            { text: "<top>", correct: false },
            { text: "<banner>", correct: false }
        ]
    },
    {
        question: "Which ARIA role is used to define a main content region on a webpage?",
        answers: [
            { text: "role='main'", correct: true },
            { text: "role='content'", correct: false },
            { text: "role='primary'", correct: false },
            { text: "role='central'", correct: false }
        ]
    },
    {
        question: "What is the purpose of the <main> tag in HTML5?",
        answers: [
            { text: "To contain the primary content of the webpage", correct: true },
            { text: "To contain the footer information", correct: false },
            { text: "To define navigation links", correct: false },
            { text: "To include scripts", correct: false }
        ]
    },
    {
        question: "Which attribute is used to improve accessibility for users with screen readers?",
        answers: [
            { text: "aria-label", correct: true },
            { text: "data-label", correct: false },
            { text: "alt-label", correct: false },
            { text: "screen-label", correct: false }
        ]
    },
    {
        question: "Which ARIA role is used to define an element containing interactive controls for the user?",
        answers: [
            { text: "role='toolbar'", correct: true },
            { text: "role='panel'", correct: false },
            { text: "role='header'", correct: false },
            { text: "role='control'", correct: false }
        ]
    },
    {
        question: "What is the purpose of using the <nav> element in HTML5?",
        answers: [
            { text: "To mark up navigation links on the website", correct: true },
            { text: "To insert images into the website", correct: false },
            { text: "To create headings on the website", correct: false },
            { text: "To define footer content on the website", correct: false }
        ]
    },
    {
        question: "Which tag is used to define the footer for a document or section?",
        answers: [
            { text: "<footer>", correct: true },
            { text: "<foot>", correct: false },
            { text: "<bottom>", correct: false },
            { text: "<end>", correct: false }
        ]
    },
    {
        question: "Which ARIA role is commonly used to define a region containing complementary information?",
        answers: [
            { text: "role='complementary'", correct: true },
            { text: "role='supplementary'", correct: false },
            { text: "role='aside'", correct: false },
            { text: "role='info'", correct: false }
        ]
    },
    {
        question: "Which ARIA role is used to define a search area on a webpage?",
        answers: [
            { text: "role='search'", correct: true },
            { text: "role='searchbox'", correct: false },
            { text: "role='finder'", correct: false },
            { text: "role='lookup'", correct: false }
        ]
    },
//Lesson 3: Website Navigation, Page Structure, and WAI-ARIA roles
    {
        question: "What is the primary purpose of a web host?",
        answers: [
            { text: "To store and deliver website files", correct: true },
            { text: "To create website content", correct: false },
            { text: "To style websites", correct: false },
            { text: "To debug website errors", correct: false }
        ]
    },
    {
        question: "Which protocol is commonly used to upload files to a web server?",
        answers: [
            { text: "FTP", correct: true },
            { text: "HTTP", correct: false },
            { text: "SMTP", correct: false },
            { text: "POP3", correct: false }
        ]
    },
    {
        question: "What does FTP stand for?",
        answers: [
            { text: "File Transfer Protocol", correct: true },
            { text: "File Transmission Process", correct: false },
            { text: "Fast Transfer Protocol", correct: false },
            { text: "File Transfer Process", correct: false }
        ]
    },
    {
        question: "Which file is commonly used as the homepage for a website?",
        answers: [
            { text: "home.html", correct: false },
            { text: "index.html", correct: true },
            { text: "main.html", correct: false },
            { text: "start.html", correct: false }
        ]
    },
    {
        question: "Which of the following is a best practice for file management?",
        answers: [
            { text: "Use short and descriptive file names", correct: true },
            { text: "Use spaces in file names", correct: false },
            { text: "Avoid organizing files in folders", correct: false },
            { text: "Use only uppercase letters for file names", correct: false }
        ]
    },
    {
        question: "Which file type is usually not allowed for web hosting due to security reasons?",
        answers: [
            { text: ".exe", correct: true },
            { text: ".jpg", correct: false },
            { text: ".html", correct: false },
            { text: ".css", correct: false }
        ]
    },
    {
        question: "What is the purpose of using a subdomain in web hosting?",
        answers: [
            { text: "To create a separate section of the main website", correct: true },
            { text: "To make the website load faster", correct: false },
            { text: "To improve website SEO", correct: false },
            { text: "To prevent unauthorized access to the website", correct: false }
        ]
    },
    {
        question: "What does SSL stand for in web hosting?",
        answers: [
            { text: "Secure Sockets Layer", correct: true },
            { text: "Secure Server Link", correct: false },
            { text: "Socket Security Link", correct: false },
            { text: "Server Security Layer", correct: false }
        ]
    },
    {
        question: "Which of the following is the safest way to store your website's password?",
        answers: [
            { text: "In a password manager", correct: true },
            { text: "In a text file on the server", correct: false },
            { text: "In an email", correct: false },
            { text: "On a sticky note on your monitor", correct: false }
        ]
    },
    {
        question: "Which of the following is a common control panel used in web hosting?",
        answers: [
            { text: "cPanel", correct: true },
            { text: "WebManager", correct: false },
            { text: "SiteControl", correct: false },
            { text: "HostPanel", correct: false }
        ]
    },
    {
        question: "What is a domain name?",
        answers: [
            { text: "The address used to access a website", correct: true },
            { text: "A file stored on a web server", correct: false },
            { text: "A programming language for websites", correct: false },
            { text: "A browser used to access the web", correct: false }
        ]
    },
    {
        question: "What is the default port used for FTP connections?",
        answers: [
            { text: "21", correct: true },
            { text: "80", correct: false },
            { text: "443", correct: false },
            { text: "8080", correct: false }
        ]
    },
    {
        question: "Which command line tool can be used to upload files to a web server using FTP?",
        answers: [
            { text: "ftp", correct: true },
            { text: "scp", correct: false },
            { text: "wget", correct: false },
            { text: "curl", correct: false }
        ]
    },
    {
        question: "Why is it important to organize files into folders on a web server?",
        answers: [
            { text: "To make file management easier", correct: true },
            { text: "To speed up the website's loading time", correct: false },
            { text: "To prevent files from being deleted", correct: false },
            { text: "To increase website traffic", correct: false }
        ]
    },
    {
        question: "Which of the following is a way to keep your website's files secure on the server?",
        answers: [
            { text: "Use strong, unique passwords for server access", correct: true },
            { text: "Use weak passwords for convenience", correct: false },
            { text: "Store passwords in plain text files on the server", correct: false },
            { text: "Make all files public", correct: false }
        ]
    },
 //Lesson 4: CSS Basics and Terminology 
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "bg-color", correct: false },
            { text: "bgColor", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "textstyle", correct: false }
        ]
    },
    {
        question: "Which of the following is a CSS selector?",
        answers: [
            { text: ".classname", correct: true },
            { text: "&classname", correct: false },
            { text: "#classname", correct: false },
            { text: "elementname", correct: false }
        ]
    },
    {
        question: "How do you select an element with the class 'container' in CSS?",
        answers: [
            { text: "#container", correct: false },
            { text: ".container", correct: true },
            { text: "container", correct: false },
            { text: "$container", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-style", correct: false },
            { text: "text-font", correct: false },
            { text: "font-weight", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct syntax to add a comment in CSS?",
        answers: [
            { text: "/* This is a comment */", correct: true },
            { text: "// This is a comment", correct: false },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "# This is a comment", correct: false }
        ]
    },
    {
        question: "How do you select an element with the ID 'header' in CSS?",
        answers: [
            { text: ".header", correct: false },
            { text: "#header", correct: true },
            { text: "header", correct: false },
            { text: "$header", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the space between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "text-spacing", correct: false },
            { text: "font-height", correct: false },
            { text: "spacing", correct: false }
        ]
    },
    {
        question: "What does the 'Cascading' in CSS refer to?",
        answers: [
            { text: "The style rules applied based on their specificity and order", correct: true },
            { text: "The use of multiple stylesheets", correct: false },
            { text: "The use of color gradients", correct: false },
            { text: "The creation of responsive layouts", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to add space inside an element's border?",
        answers: [
            { text: "margin", correct: false },
            { text: "padding", correct: true },
            { text: "spacing", correct: false },
            { text: "border-spacing", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to make text bold?",
        answers: [
            { text: "font-weight", correct: true },
            { text: "font-style", correct: false },
            { text: "text-decoration", correct: false },
            { text: "font-bold", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the size of an element's border?",
        answers: [
            { text: "border-size", correct: false },
            { text: "border-width", correct: true },
            { text: "border-height", correct: false },
            { text: "border-thickness", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to create rounded corners on an element?",
        answers: [
            { text: "corner-radius", correct: false },
            { text: "border-radius", correct: true },
            { text: "border-corner", correct: false },
            { text: "round-corners", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct way to center a block element horizontally?",
        answers: [
            { text: "margin: 0 auto;", correct: true },
            { text: "padding: auto;", correct: false },
            { text: "align: center;", correct: false },
            { text: "text-align: center;", correct: false }
        ]
    },
//Lesson 5: Accessibility in Web Development Projects 
    {
        question: "Why is accessibility important in web development?",
        answers: [
            { text: "To ensure websites are usable by everyone, including people with disabilities", correct: true },
            { text: "To improve website SEO", correct: false },
            { text: "To make websites load faster", correct: false },
            { text: "To prevent websites from crashing", correct: false }
        ]
    },
    {
        question: "Which HTML attribute is used to provide alternative text for images?",
        answers: [
            { text: "alt", correct: true },
            { text: "title", correct: false },
            { text: "aria-label", correct: false },
            { text: "description", correct: false }
        ]
    },
    {
        question: "Which of the following is a common accessibility issue?",
        answers: [
            { text: "Using CSS Flexbox for layout", correct: false },
            { text: "Lack of proper contrast between text and background colors", correct: true },
            { text: "Using semantic HTML tags", correct: false },
            { text: "Adding alt text to images", correct: false }
        ]
    },
    {
        question: "What does WCAG stand for?",
        answers: [
            { text: "Web Content Accessibility Guidelines", correct: true },
            { text: "Web Compatibility and Access Group", correct: false },
            { text: "Web Content Alignment Guide", correct: false },
            { text: "Web Control Accessibility Guide", correct: false }
        ]
    },
    {
        question: "Which ARIA role should be used to define a button?",
        answers: [
            { text: "role='button'", correct: true },
            { text: "role='link'", correct: false },
            { text: "role='submit'", correct: false },
            { text: "role='form'", correct: false }
        ]
    },
    {
        question: "What is the main purpose of the 'tabindex' attribute in HTML?",
        answers: [
            { text: "To improve the visual style of elements", correct: false },
            { text: "To define the order of keyboard navigation", correct: true },
            { text: "To create a tabbed layout", correct: false },
            { text: "To display a tooltip on hover", correct: false }
        ]
    },
    {
        question: "Which of the following is a technique to improve web accessibility?",
        answers: [
            { text: "Using semantic HTML elements", correct: true },
            { text: "Increasing the number of images on a page", correct: false },
            { text: "Using only inline styles", correct: false },
            { text: "Relying solely on color to convey information", correct: false }
        ]
    },
    {
        question: "What is the purpose of using 'aria-label' in HTML?",
        answers: [
            { text: "To provide a label for an element for screen readers", correct: true },
            { text: "To change the color of an element", correct: false },
            { text: "To create a link to another page", correct: false },
            { text: "To define the style of an element", correct: false }
        ]
    },
    {
        question: "Which of the following practices should be avoided to maintain accessibility?",
        answers: [
            { text: "Providing descriptive link text", correct: false },
            { text: "Using 'click here' as link text", correct: true },
            { text: "Using headings to structure content", correct: false },
            { text: "Adding keyboard navigation support", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to provide a visible caption for an input field?",
        answers: [
            { text: "<label>", correct: true },
            { text: "<caption>", correct: false },
            { text: "<input>", correct: false },
            { text: "<span>", correct: false }
        ]
    },
    {
        question: "Which of the following WCAG principles focuses on making content understandable?",
        answers: [
            { text: "Perceivable", correct: false },
            { text: "Operable", correct: false },
            { text: "Understandable", correct: true },
            { text: "Robust", correct: false }
        ]
    },
    {
        question: "Which of the following attributes provides keyboard users with additional information about an input element?",
        answers: [
            { text: "aria-describedby", correct: true },
            { text: "alt", correct: false },
            { text: "src", correct: false },
            { text: "data-info", correct: false }
        ]
    },
    {
        question: "Which color combination should be avoided to ensure text accessibility?",
        answers: [
            { text: "Black text on a white background", correct: false },
            { text: "Light gray text on a white background", correct: true },
            { text: "Dark blue text on a light yellow background", correct: false },
            { text: "White text on a black background", correct: false }
        ]
    },
    {
        question: "Which of the following tags is useful for defining the language of a webpage?",
        answers: [
            { text: "<html lang='en'>", correct: true },
            { text: "<meta charset='UTF-8'>", correct: false },
            { text: "<language>", correct: false },
            { text: "<locale>", correct: false }
        ]
    },
    {
        question: "Which of the following is a best practice for using forms in an accessible way?",
        answers: [
            { text: "Using <label> elements to describe input fields", correct: true },
            { text: "Only using placeholder text to identify inputs", correct: false },
            { text: "Using tables for layout within forms", correct: false },
            { text: "Relying on JavaScript to handle all form interactions", correct: false }
        ]
    },
//Lesson 6: Typography, Images, and CSS Flexbox (15 questions)
    {
        question: "Which CSS property is used to change the font of text?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-style", correct: false },
            { text: "text-font", correct: false },
            { text: "font-weight", correct: false }
        ]
    },
    {
        question: "Which of the following units is relative to the font size of the root element in CSS?",
        answers: [
            { text: "rem", correct: true },
            { text: "em", correct: false },
            { text: "px", correct: false },
            { text: "%", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to display an image on a webpage?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<picture>", correct: false },
            { text: "<graphic>", correct: false }
        ]
    },
    {
        question: "Which attribute is required for the <img> tag to specify the image source?",
        answers: [
            { text: "src", correct: true },
            { text: "href", correct: false },
            { text: "link", correct: false },
            { text: "source", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'alt' attribute in an image tag?",
        answers: [
            { text: "To provide alternative text for the image if it cannot be displayed", correct: true },
            { text: "To link the image to another page", correct: false },
            { text: "To change the image size", correct: false },
            { text: "To set the image border color", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "letter-spacing", correct: false },
            { text: "word-spacing", correct: false },
            { text: "text-spacing", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to create space between letters in text?",
        answers: [
            { text: "letter-spacing", correct: true },
            { text: "line-height", correct: false },
            { text: "text-spacing", correct: false },
            { text: "word-spacing", correct: false }
        ]
    },
    {
        question: "In CSS Flexbox, which property is used to align items along the main axis?",
        answers: [
            { text: "justify-content", correct: true },
            { text: "align-items", correct: false },
            { text: "align-content", correct: false },
            { text: "flex-direction", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the direction of the main axis in a Flexbox container?",
        answers: [
            { text: "flex-direction", correct: true },
            { text: "flex-wrap", correct: false },
            { text: "align-items", correct: false },
            { text: "justify-content", correct: false }
        ]
    },
    {
        question: "What is the default value of the 'flex-direction' property in CSS Flexbox?",
        answers: [
            { text: "row", correct: true },
            { text: "column", correct: false },
            { text: "row-reverse", correct: false },
            { text: "column-reverse", correct: false }
        ]
    },
    {
        question: "Which CSS Flexbox property is used to define the alignment of items along the cross axis?",
        answers: [
            { text: "align-items", correct: true },
            { text: "justify-content", correct: false },
            { text: "align-content", correct: false },
            { text: "flex-wrap", correct: false }
        ]
    },
    {
        question: "How do you set an image to be responsive in CSS?",
        answers: [
            { text: "Set the width to 100% and the height to auto", correct: true },
            { text: "Set the width and height to fixed values", correct: false },
            { text: "Use the 'position' property", correct: false },
            { text: "Set the image source to a responsive URL", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the font size of text?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "text-style", correct: false },
            { text: "size", correct: false }
        ]
    },
    {
        question: "Which of the following is a benefit of using Flexbox for layout?",
        answers: [
            { text: "Easily align and distribute space among items in a container", correct: true },
            { text: "Add animations to elements", correct: false },
            { text: "Change the color of text", correct: false },
            { text: "Optimize image sizes", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to wrap items onto multiple lines in a Flexbox container?",
        answers: [
            { text: "flex-wrap", correct: true },
            { text: "flex-direction", correct: false },
            { text: "align-items", correct: false },
            { text: "justify-content", correct: false }
        ]
    } 
];


// This array currently contains 18 questions as a starting point. 
// Please duplicate and modify the pattern to complete up to 100 questions covering each lesson.


let shuffledQuestions, currentQuestionIndex;
let correctAnswersCount = 0;
let totalQuestions = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizSizeInput = document.getElementById('quiz-size-input');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
    const quizSize = parseInt(quizSizeInput.value);
    if (quizSize > 0 && quizSize <= questions.length) {
        totalQuestions = quizSize;
        startQuiz(quizSize);
    } else {
        alert(`Please enter a number between 1 and ${questions.length}`);
    }
});

function startQuiz(quizSize) {
    shuffledQuestions = shuffleArray(questions).slice(0, quizSize);
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = ''; // Clear previous answers

    question.answers.forEach(answer => {
        // Create a card for each answer
        const card = document.createElement('div');
        card.classList.add('card', 'mb-2');

        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-light', 'btn-block'); // Use Bootstrap classes
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(answer, question));

        // Append button to the card
        card.appendChild(button);
        answerButtonsElement.appendChild(card);
    });
}

function selectAnswer(selectedAnswer, question) {
    const correct = selectedAnswer.correct;

    if (correct) {
        correctAnswersCount++;
        alert('Correct!');
    } else {
        // Find the correct answer in the current question
        const correctAnswer = question.answers.find(answer => answer.correct).text;
        alert(`Wrong! The correct answer is: "${correctAnswer}".`);
    }

    // Delay before showing the next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            alert(`Quiz completed! You answered ${correctAnswersCount} out of ${totalQuestions} correctly.`);
            resetQuiz();
        }
    }, 1000); // 1-second delay to show the feedback before moving on
}

function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    shuffledQuestions = [];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}