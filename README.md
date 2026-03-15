<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Blink AI Templates SDK

A robust TypeScript framework for discovering, customizing, and deploying premium AI-generated website and mobile app templates. This SDK provides programmatic access to template metadata, type-safe customization engines, and seamless deployment hooks.

## 🚀 Key Features

- **Programmatic Discovery**: Sub-50ms template metadata resolution with intelligent filtering.
- **Type-safe Customization**: Dynamic AST and template modification with full Zod validation.
- **AI Integration Engine**: Extensible engine designed for seamless LLM integration.
- **Deployment Hooks**: Instant production-ready output with Vercel and Expo hooks.
- **CLI Scaffolding**: Rapidly scaffold new projects with a powerful command-line interface.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4.0
- **Animation**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Validation**: Zod
- **AI Support**: @google/genai

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Blink-AI-Templates-SDK
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` and add your Gemini API key:
   ```bash
   cp .env.example .env
   ```
   Edit `.env`:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## 📖 Usage Examples

### Blink Client Initialization
```typescript
import { BlinkClient } from '@blink/core';
import { VercelAdapter } from '@blink/adapters';

const blink = new BlinkClient({
  apiKey: process.env.BLINK_API_KEY,
  adapter: new VercelAdapter(),
});
```

### Template Customization
```typescript
import { CustomizationEngine } from '@blink/core';

const userConfig = { theme: 'dark', branding: { primary: '#FF5733' } };
const engine = new CustomizationEngine();

const generateSite = async (templateId: string) => {
  const template = await blink.templates.get(templateId);
  return engine.apply(template, userConfig);
};
```

## 📜 License

This project is licensed under the Apache-2.0 License.
