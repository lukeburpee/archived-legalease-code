export default {
  server: {
    remote: process.env.SERVER_URL,
    bucket: "formbuilder",
  },
  fieldList: [
    {
      id: "text",
      icon: "text-color",
      label: "Short text",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        description: "",
        default: ""
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            description: {type: "string", title: "Example value"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "multilinetext",
      icon: "align-left",
      label: "Long text",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        description: "",
        default: ""
      },
      uiSchema: {
        "ui:widget": "textarea",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            description: {type: "string", title: "Example value"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "checkbox",
      icon: "check",
      label: "Yes/No",
      jsonSchema: {
        type: "boolean",
        title: "Edit me",
        default: false,
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "radiobuttonlist",
      icon: "list",
      label: "Choice list",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        enum: ["option 1", "option 2", "option 3"],
      },
      uiSchema: {
        "ui:widget": "radio",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Options",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "multiplechoiceslist",
      icon: "list-alt",
      label: "Multiple choices list",
      jsonSchema: {
        type: "array",
        title: "Edit me",
        items: {
          type: "string",
          enum: ["option 1", "option 2", "option 3"],
        },
        uniqueItems: true
      },
      uiSchema: {
        "ui:widget": "checkboxes",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Options",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
  ],
};
