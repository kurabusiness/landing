# Deploy Kura — Git + Vercel

Guia para deploy seguro e automatizado.

---

## 1. Git — Configuração inicial

### Se o repositório ainda não existe

```bash
cd kura
git init
git add .
git status   # confira que .env NÃO está na lista
git commit -m "chore: setup inicial"
```

### Repositório remoto (GitHub)

1. Crie um repositório no GitHub: https://github.com/new
2. Nome sugerido: `kura` ou `kura-landing`
3. **Não** marque "Add a README" (o projeto já tem arquivos)
4. Copie a URL do repositório

```bash
git remote add origin https://github.com/kurabusiness/landing.git
git branch -M main
git push -u origin main
```

---

## 2. Vercel — Deploy automatizado

### Primeiro deploy

1. Acesse https://vercel.com e faça login (use sua conta GitHub)
2. **Add New Project** → **Import Git Repository**
3. Selecione o repositório `kura`
4. **Root Directory:** se o Next.js está em `kura/` dentro do repo, defina `kura`. Se o repo é só o app, deixe em branco.
5. **Environment Variables:** adicione as variáveis (veja seção 3)
6. Clique em **Deploy**

### Deploy automático

Depois do primeiro deploy, **cada push em `main` gera um novo deploy**. Não é preciso fazer nada manual.

---

## 3. Variáveis de ambiente (segurança)

**Nunca** commite `.env` ou `.env.local`. Use apenas no Vercel:

| Variável | Obrigatório | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Não | URL do site (ex: https://kura.com.br) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Não | Link do Instagram |
| `NEXT_PUBLIC_INSTAGRAM_HANDLE` | Não | @usuario |
| `NEXT_PUBLIC_YOUTUBE_URL` | Não | Link do canal YouTube |
| `NEXT_PUBLIC_YOUTUBE_HANDLE` | Não | Nome do canal |
| `NEXT_PUBLIC_WHATSAPP` | Não | Número WhatsApp |
| `NEXT_PUBLIC_EMAIL` | Não | E-mail de contato |

O formulário Mailchimp funciona sem variáveis — usa a API proxy integrada.

### Como adicionar no Vercel

1. **Project** → **Settings** → **Environment Variables**
2. Adicione cada variável
3. Marque **Production**, **Preview** e **Development** conforme necessário
4. Salve — o próximo deploy usará as novas variáveis

---

## 4. Domínio customizado (opcional)

1. **Project** → **Settings** → **Domains**
2. Adicione `kura.com.br` (ou seu domínio)
3. Siga as instruções de DNS (CNAME ou A record)
4. Vercel gerencia SSL automaticamente

---

## 5. Segurança — Checklist

- [x] `.env` e `.env.local` no `.gitignore`
- [x] Headers de segurança no `next.config.ts` (X-Frame-Options, CSP, etc.)
- [x] Secrets apenas no Vercel, nunca no código
- [ ] 2FA ativado na conta GitHub
- [ ] 2FA ativado na conta Vercel
- [ ] Domínio com HTTPS (Vercel faz automaticamente)

---

## 6. Fluxo de trabalho

```
git add .
git commit -m "feat: descrição da mudança"
git push origin main
```

→ Vercel detecta o push e faz o deploy em ~1–2 min.

---

## 7. Preview deployments

Cada **Pull Request** gera uma URL de preview (ex: `kura-git-branch-xxx.vercel.app`). Útil para testar antes de ir para produção.
