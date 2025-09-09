# elena-personal-site

## How this website works
_You might want to paste this into ChatGPT. This guidance will help it help you change things correctly._

This website is built with:
- Eleventy as the static site generator.
    - Thererefore to 'build' the site you need to run `npm run build` in the terminal. You'll see the output in the `_site/` folder.
    - To see the site in your browser you can run `npm run dev` in the terminal then visit `http://localhost:8080` in your browser. Any changes you make will be reflected 
    - To change its configuration change the `.eleventy.js` file.
- A single `src/index.html`.
- Vanilla JavaScript in the `<script>` tag in `src/index.html` (i.e. it is not currently in a separate file).
- Tailwind CSS for styling.
    - The stylesheet is in`src/css/style.css`.
    - Tailwind is included as part of the package. You can see it in `package.json`.
- GitHub for the code. The repository is at `https://github.com/elenae81/elena-personal-site`.
- Cloudflare Pages for hosting.
    - It auto-deploys from the `main` branch from GitHub.
    - So if you want to make changes you should try them out on a different git branch. Cloudflare will automatically deploy that branch to a temporary address. So you can visit that from your phone or send it to other people. Once you're happy the changes look good then 'merge' the changes into the `main` branch.

The site was originally built by following this guide: [https://5balloons.info/guide-tailwindcss-eleventy-static-site/](https://5balloons.info/guide-tailwindcss-eleventy-static-site/).

_This guidance is accurate as of commit `INSERT_COMMIT_HERE`._

## How to modify the website
The first thing to remember about how this website works is that it's all just text files. There are some complicated bits about how the files work together. But you only need to worry about changing `src/index.html` most of the time.

The terminal can be a bit intimidating. But with a bit of help from ChatGPT you should be able to run `npm run dev` from the terminal and see the website.

Similarly, Git can be messy. But it's essential to make sure that, first, you can try out changes to the code without breaking anything on the real website that everyone uses, and second, so that if anything gets really messed up you can go back in time to a previous version. And again, ChatGPT is there to help.

You can either modify the website 'locally' (i.e. in a folder on a laptop) or using a 'cloud IDE'.

I think the cloud IDE is probably easier. 'GitPod' has previously been used. You connect GitPod to the GitHub repository. Then you get an online version of 'VS Code'. That includes a text editor for writing code, a terminal for writing commands and a git client for recording your changes.

Alternatively you can use a git client (either in your laptop terminal or by downloading like GitHub Desktop) to 'clone' the repository and 'pull' the code down from GitHub to a folder on your computer. Then ask ChatGPT 'Help me install NodeJS and npm using nvm on Winodws' then run `npm install` from a terminal in the same folder as the code. Then you can run `npm run dev` and see the website working. You'll also need a text editor (such as VS Code).

Once you have the code open, either in GitPod or on your laptop, you need to:
1. Ensure you are running `npm run dev` from either GitPod or your laptop. Ensure you can see the website at `http://localhost:8080`. Try removing a word in `index.html`. Check that the word has actually disappeared on the 'localhost' version (then obviously undo the change). Ideally you should also be on a git branch other than `main` (such as `dev` or `fix-fonts`).
2. Write down what change you're going to make. Then paste into ChatGPT:
    - the guidance under 'How this website works' above,
    - a screenshot of the current website,
    - the entirety of the `index.html` file inside the `src` folder,
    - and a description of the change you want to make along with the instruction to 'think step by step' and _only_ return the changes that you need to make (instead of rewriting the whole of `index.html`).
3. ChatGPT will write you some new code. Paste the code to replace the relevant bit of `index.html`. If things look wrong you can always 'Discard changes' with git and start again.
4. Once you're happy with the changes you need to 'stage' then 'commit' with a message, then 'push'. This will send your code to GitHub. Then Cloudflare will notice the changes and re-build the website.
5. Ideally you've made these changes on a separate git branch. So Cloudflare will give you a special URL which reflects these changes. But your real website won't have changed. You can keeep pushing changes to this branch and keep checking the updates. Once you're happy with the changes use git or the GitHub website to 'merge' the changes from your branch into the `main` branch. Then you'll see Cloudflare update the real website.

## Post-script: why not Squarespace?

Squarespace, Webflow and others are fine. They make some things easier. But they charge you a decent chunk for the privilege.

The way this site is built is very simple. But, especially with tools like ChatGPT, it can produce results that look just good as, if not better than, tools like Squarespace. But you control everything.

So it's a trade-off between ease and control.