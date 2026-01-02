# How to Push Your Code to Git

## ✅ Step 1: Your Code is Ready
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Security measures added and committed

## 📝 Step 2: Create a Remote Repository

### Option A: GitHub (Recommended)

1. **Go to GitHub**: https://github.com
2. **Sign in** or create an account
3. **Click the "+" icon** (top right) → "New repository"
4. **Repository name**: `m-m-home-solutions` (or any name you like)
5. **Description**: "M&M Home Solutions Website"
6. **Visibility**: Choose Public or Private
   - **Private**: Only you can see it (recommended for business)
   - **Public**: Everyone can see it
7. **DO NOT** check "Initialize with README" (you already have code)
8. **Click "Create repository"**

### Option B: GitLab

1. Go to https://gitlab.com
2. Sign in or create account
3. Click "New project" → "Create blank project"
4. Fill in project name and details
5. Click "Create project"

## 🔗 Step 3: Connect Your Local Repository to Remote

After creating the repository, GitHub/GitLab will show you commands. Use these:

### For GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### For GitLab:
```bash
git remote add origin https://gitlab.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## 🚀 Step 4: Push Your Code

Once you've added the remote, run:

```bash
git push -u origin main
```

You'll be asked for your username and password (or use a Personal Access Token).

## 🔐 Step 5: Authentication

### GitHub:
- Use a **Personal Access Token** instead of password
- Create one: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` permissions

### GitLab:
- Use your GitLab password or Personal Access Token

## 📋 Quick Command Reference

```bash
# Check current status
git status

# Check if remote is configured
git remote -v

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to remote
git push -u origin main

# For future updates
git add .
git commit -m "Your commit message"
git push
```

## 🆘 Troubleshooting

### If you get "remote already exists" error:
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin YOUR_REPO_URL
```

### If you get authentication error:
- Make sure you're using Personal Access Token (not password)
- Check that token has correct permissions

### If you want to change remote URL:
```bash
git remote set-url origin NEW_REPO_URL
```

## 📝 Next Steps After Pushing

1. **Set up GitHub Pages** (if you want to host the site on GitHub)
2. **Add .gitignore** (already done - excludes node_modules, .next, etc.)
3. **Protect main branch** (in repository settings)
4. **Add collaborators** (if needed)

## 🔒 Security Note

- **Never commit** `.env` files with API keys
- **Never commit** passwords or secrets
- Keep sensitive data in environment variables
- Your `.gitignore` already protects important files

---

**Need Help?** If you share your repository URL, I can help you add the remote and push!

