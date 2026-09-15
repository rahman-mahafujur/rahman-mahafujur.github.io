# Portfolio — Md. Mahafujur Rahman

Static site, ready to publish on GitHub Pages.

## Files

```
index.html    → page structure
styles.css    → all visual design
script.js     → renders data.js into the page (do not need to edit)
data.js       → EDIT THIS to update content (name, bio, current work, links, etc.)
assets/
  profile.png → your photo
```

## Publish it (GitHub Pages, no coding needed)

1. Go to [github.com/new](https://github.com/new) and create a repository.
   - If you want the URL `https://<your-username>.github.io`, name the repo exactly `<your-username>.github.io`.
   - Otherwise any name works (e.g. `portfolio`) — the site will be at `https://<your-username>.github.io/<repo-name>`.
2. Open the new repo → **Add file → Upload files**.
3. Drag in all the files and the `assets` folder from this project, keeping the same structure.
4. Commit the changes.
5. Go to **Settings → Pages**.
6. Under **Build and deployment → Source**, choose **Deploy from a branch**.
7. Branch: `main`, folder: `/ (root)` → **Save**.
8. Wait 1–2 minutes, then visit the URL GitHub shows on that same Pages settings page.

## Updating content later

Open `data.js` in GitHub (or any text editor), edit the text between the quotes (for example, change a project's `status` or `description`), commit the change — the live site updates automatically. You never need to touch `index.html`, `styles.css`, or `script.js` for routine updates.

## Adding a new "current work" item

Inside `data.js`, add a new block to the `currentWork` array:

```js
{
  title: "New project title",
  description: "One or two sentences about it.",
  status: "Active"   // or "Revising" or "Planning"
}
```
