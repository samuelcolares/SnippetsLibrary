
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "SNIPPET", uid: "title", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "DESCRIPTION", uid: "description", sortable: true },
  { name: "CODE", uid: "snippet", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const categoryOptions = [
  { name: "LeetCode", uid: "LeetCode" },
  { name: "Shadcn/UI", uid: "Shadcn/UI" },
];

export { columns, categoryOptions };
