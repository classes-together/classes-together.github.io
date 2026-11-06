# classes-together.github.io
<h2><a href="https://docs.google.com/document/d/1b1uGfrtwUT9Sd3vDsNSTGJgsmWPGEfQ2u8JJY-z7OmE/edit?usp=sharing">Lab 1 Outline - Foundation</a></h2>

**Website:** [Classes Together](https://classes-together.github.io/)

## Team Members


| Name | Email | GitHub |
|------|-------|--------|
| Ty Brickers | | |
| Brycen Cuffee | | |
| Roman David | [Email](mailto:rdavi030@odu.edu) | [@rojarida](https://github.com/rojarida)|
| Char Davis | | |
| MayLing Gordon | | |
| Aaron Moeller | | |
| Zachary Perkins | | |
| Pratham Talati | | |
| Ali Al Tekreeti | | |


## Website Structure


| File / Directory | Description |
|------------------|-------------|
| `_config.yml` | Website configuration |
| `_layouts/` | Shared page layouts |
| `_includes/` | Reusable components |
| `_data/` | YAML files containing website data |
| `assets/css/` | Website styling |
| `assets/js/` | JavaScript functionality |
| `assets/team/` | Portraits of team members |
| `assets/presentations/` | Presentation documents |
| `assets/deliverables/` | Deliverable documents |
| `assets/icons/` | Icons |
| `assets/images/` | Images |
| `*.html` | Corresponding HTML page |


## Making Changes

The website uses Jekyll and YAML data files to dynamically populate the pages. In most cases, adding or updating content only requires modifying the appropriate YAML file. 

### Updating Page Content

1. Locate the page you want to modify.
2. Edit HTML normally (or if you need to make Jekyll layout adjustments).
3. Preview your changes locally.

### Adding a Team Member

1. Open `_data/team-members.yml`.
2. Use the existing YAML format and fill in the details.
4. Preview the [Team page](team.html) locally to verify information and portrait display correctly.

### Adding Presentations/Deliverables

1. Add the PDF of the document under the appropriate directory under `assets/`.
2. Open `_data/documents.yml`.
3. Add a new entry following the existing YAML format under the appropriate top-level section.
5. Preview either the [Presentations page](presentations.html) or [Deliverables page](deliverables.html) to verify if the document appears in the appropriate section. 

### Adding References

1. Open `_data/references.yml`.
2. Locate the appropriate category (`academic`, `web`, or `media`).
3. Add a new entry following the existing YAML structure.
4. Assign a **UNIQUE** ID.
5. Include the appropriate citation information such as title, author, publication date, and source URL.
6. Preview the [References page](references.html) locally to verify that the entry displays correctly.

#### Citing References

Each reference in `_data/references.yml` should be assigned a unique id.

Both methods will generate a numbered citation that links to the corresponding reference.

#### Method 1: Citing in the About Page

The [About page](about.html) current supports citations directly through `_data/about.yml`. Use the optional `text + citation` pair and provide the reference unique ID.

#### Method 2: Citing in Other Pages

For other pages, use the reusable `_includes/cite.html` directly within the page's HTML:

```html
{% include cite.html id="cite-id" %}
```

> [!NOTE]
> Each category may require different metadata. Double check how the Jekyll layout is structured in [References](references.html).

### Updating Styling

There's only a single stylesheet located at `assets/css/style.css`.

## Adding New Pages

### 1. Create the HTML File

Create a new `.html` file in the root directory.

For example, if you wanted to add a page for FAQ, add a file named `faq.html`.

### 2. Configure the Page Layout

Each page **MUST** include the **YAML frontmatter** at the beginning of the file. This will tell Jekyll how to process the page.

On top of the created `.html`, add the following:

```html
---
title: FAQ
header_key: faq
---

<section class="page faq">
  {% include page-header.html key=page.header_key %}
</section>
```

- `title`: FAQ defines the page title for use by the Jekyll layout.
- `header_key`: Identifies the corresponding entry in `_data/page-headers.yml` used by the shared page header.
  - Ensure you create an entry if used.
- `<section class="page faq">`: identifies the page and allows for page-specific styling.

Then, you can continue with standard HTML inside the `<section>` tags. Optionally, you can create a corresponding `.yml` inside `_data/` and use Liquid templating to dynamically populate the page with structured data.

### 3. Add the Page to Navigation Menu

Creating a page doesn't automatically add it to the website's navigation menu.

Open the `_includes/navigation.html`, and add a link for the new page:

```html
<a href="{{ '/faq.html' | relative_url }}"
  {% if page.url == '/faq.html' %}
  aria-current="page"
  {% endif %}>
  FAQ
</a>
```

- `relative_url` generates a URL based on the site's configured `baseurl` inside `_config.yml`.
- `page.url` checks whether the FAQ page is the currently active page
- `aria-current="page"` identifies the active page and allows existing CSS to highlight it.

Where the link is placed determines the location in the navigation menu.

### 4. Add Page-Specific Styling (Optional)

The primary stylesheet is located at: `assets/css/style.css`.

If the new page requires custom styling, use its unique CSS class to avoid conflicting with other pages.

For example:

```css
.page.faq {
  max-width: 1000px;
  margin: 0 auto;
}
```

If possible, try to reuse existing styles to maintain consistent appearance throughout the website.

## Local Development

### 1. Install Prerequisites

Follow the official [Jekyll Installation Guide](https://jekyllrb.com/docs/installation/) for your operating system.

### 2. Verify Installation

Verify that Ruby, RubyGems, Bundler, and Jekyll are installed correctly:

```bash
ruby --version
gem --version
bundle --version
```

### 3. Clone the Repository

Clone the repository:

```bash
git clone https://github.com/classes-together/classes-together.github.io.git
```

Navigate to the project directory:

```bash
cd classes-together.github.io
```

### 4. Install Dependencies

Install the dependencies defined in the project's `Gemfile`:

```bash
bundle install
```

After installing the required Ruby and Jekyll dependencies, run:

```bash
bundle exec jekyll serve --livereload
```

A local development server will start, typically available at:

[http://localhost:4000](http://localhost:4000)

Changes to most website files will automatically trigger a rebuild and refresh the browser.

To stop the development server, press `Ctrl + C` in the terminal.

## Contributing

To maintain a clean and organized repository, use the follow workflow when making changes:

1. Create a new branch from `main`.
2. Make your changes on the new branch.
3. Test the website locally.
4. Commit your changes with descriptive commit messages.
5. Push the branch to GitHub.
6. Open a pull request.
7. Review and merge the changes once approved.

> [!WARNING]
> Avoid making changes directly to `main`.
