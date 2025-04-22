// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        label: "Posts (UA)",
        name: "posts_ua",
        path: "content/ua/posts",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
            required: true
          },
          {
            type: "boolean",
            label: "Draft",
            name: "draft"
          },
          {
            type: "string",
            label: "Description",
            name: "description"
          },
          {
            type: "string",
            label: "Tags",
            name: "tags",
            list: true
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true
          }
        ]
      },
      {
        label: "Posts (EN)",
        name: "posts_en",
        path: "content/en/posts",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
            required: true
          },
          {
            type: "boolean",
            label: "Draft",
            name: "draft"
          },
          {
            type: "string",
            label: "Description",
            name: "description"
          },
          {
            type: "string",
            label: "Tags",
            name: "tags",
            list: true
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true
          }
        ]
      },
      {
        label: "Pages (UA)",
        name: "pages_ua",
        path: "content/ua",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true
          },
          {
            type: "string",
            label: "Description",
            name: "description"
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true
          }
        ]
      },
      {
        label: "Pages (EN)",
        name: "pages_en",
        path: "content/en",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true
          },
          {
            type: "string",
            label: "Description",
            name: "description"
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
