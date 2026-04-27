---
concept: Github Tagging
lastUpdated: 2026-04-26T00:00:00.000Z
tags:
  - github
  - technology
categories:
  - Technology
contributors:
  - NCryptsion
---

## descriptions

<details>
<summary>NCryptsion</summary>

## Step 1: Initialize a New Git Repository

If you haven’t already, you’ll need to initialize a Git repository. This step will create a `.git` directory to start tracking your files.

```bash
git init
```

## Step 2: Add Files and Make Your First Commit
Next, you’ll want to add some files to your repository and commit them. For this example, we’ll create a simple README.md file.

```bash
echo "# My New Project" > README.md
git add README.md
git commit -m "Initial commit"
```

## Step 3: Create a Tag
Now that you have a commit, you can create tags to mark specific points in your Git history.

**Lightweight Tag**
A lightweight tag is just a name pointing to a specific commit. It’s like a bookmark.
```bash
git tag v1.0
```

**Annotated Tag**
An annotated tag includes metadata such as the tag name, date, and an optional message. This is useful for releases.

```bash
git tag -a v1.1 -m "Version 1.1 release"
```

## Step 4: View Your Tags
You can check all the tags that have been created in your repository by running the following command:
```bash
git tag
```

This will list all the tags, such as:
```bash
v1.0
v1.1
```

## Step 5: Push Tags to GitHub
To share your tags with others (or push them to a remote repository), you need to push them to GitHub.

**Push a Specific Tag**
If you want to push only one tag, use this command:
```bash
git push origin v1.0  # Pushes the 'v1.0' tag
```

**Push All Tags**
Alternatively, if you want to push all tags at once, you can use the following command:

```bash
git push --tags
```

## Step 6: Verify Your Tags on GitHub
Once your tags are pushed, you can verify them by going to your GitHub repository page. Under the "Releases" section, you should see the tags listed as versions.


</details>

## References

### Website

- [https://git-scm.com/book/en/v2/Git-Basics-Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- [https://www.datacamp.com/tutorial/git-tag](https://www.datacamp.com/tutorial/git-tag)

