# Todo-Tailwind

Um aplicativo moderno de lista de tarefas (Todo) construído com React e TypeScript, estilizado usando Tailwind CSS. Este aplicativo permite aos usuários adicionar, gerenciar e filtrar suas tarefas diárias com uma interface de usuário limpa e responsiva, apresentando modos de tema claro e escuro.

## Images

![Screenshot Mobile Light](./public/images/LightMobile.png)
![Screenshot Desktop Dark](./public/images/DarkDesktop.png)


## Recursos

## 🚀 Funcionalidades

- ✅ **Adicionar novas tarefas**
- 🔁 **Marcar como concluída ou pendente**
- 🗑️ **Excluir tarefas individuais**
- 🧹 **Limpar todas as tarefas concluídas**
- 🔎 **Filtrar tarefas (Todas | Ativas | Concluídas)**
- 🌗 **Alternar entre tema claro e escuro**
- 📱 **Design totalmente responsivo**

## Tecnologias Utilizadas

-   **React 19:** Uma biblioteca JavaScript para construir interfaces de usuário.
-   **TypeScript:** Um superconjunto tipado de JavaScript que compila para JavaScript puro.
-   **Vite:** Uma ferramenta de construção rápida que fornece um servidor de desenvolvimento instantâneo e empacota seu código.
-   **Tailwind CSS:** Um framework CSS utility-first para construir designs personalizados rapidamente.
-   **ESLint:** Para manter a qualidade e consistência do código.

## 📚 Desafios e Aprendizados

Durante o desenvolvimento, alguns pontos foram desafiadores e contribuíram diretamente para o aprendizado:

### 🎯 Gerenciamento de Estado

Entender quando utilizar **useState** para estado local e quando utilizar **Context API** para estado global (como o tema) foi essencial para manter o código organizado e escalável.

### 🎨 Estilização Dinâmica com Tailwind

Aplicar classes condicionais para alternar temas e estados (ativo, concluído, hover) exigiu atenção na construção das strings de classe e organização do design system.

### 🧩 Tipagem com TypeScript

Criar interfaces como `Todo` e tipar corretamente props, eventos e estados ajudou a evitar erros e melhorar a previsibilidade do código.

### 🔁 Filtros e Manipulação de Arrays

Trabalhar com métodos como `.filter()`, `.map()` e garantir imutabilidade reforçou boas práticas no React.