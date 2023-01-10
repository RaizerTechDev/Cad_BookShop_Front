/* eslint-disable jsx-a11y/alt-text */
import { Content } from "./styles";

export function Header() {
  return (
    <Content>
      <button>
        <a href="https://api.whatsapp.com/send/?phone=47999327137">
          <img
            src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
            target="-blank"
          />
        </a>
      </button>

      <img src="https://github.com/RafaRz76Dev.png" alt="admin" />
    </Content>
  );
}
