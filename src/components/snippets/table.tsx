"use client";
import React from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Selection,
  SortDescriptor,
  Tooltip,
} from "@nextui-org/react";

import { PlusIcon } from "@/components/ui/PlusIcon";
import { ChevronDownIcon } from "@/components/ui/ChevronDownIcon";
import { SearchIcon } from "@/components/ui/SearchIcon";
import { EditIcon } from "@/components/ui/edit-icon";
import { EyeIcon } from "@/components/ui/view-icon";
import { Layers3Icon } from "lucide-react";

import { capitalize } from "@/lib/utils";
import { columns } from "@/components/data";
import ModalDelete from "@/components/modal-delete";
import { CategoryType, SnippetType } from "@/types";

const INITIAL_VISIBLE_COLUMNS = ["title", "category", "description", "actions"];

type Props = {
  snippets: SnippetType[];
  categories: CategoryType[];
};

export default function SnippetsTable({ snippets, categories }: Props) {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  const [filterValue, setFilterValue] = React.useState("");
  const [codeValue, setCodeValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [categoryFilter, setCategoryFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "id",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);
  const hasCodeFilter = Boolean(codeValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredSnippets = [...snippets];

    if (hasSearchFilter) {
      filteredSnippets = filteredSnippets.filter((snippet) =>
        snippet.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (hasCodeFilter) {
      filteredSnippets = filteredSnippets.filter((snippet) =>
        snippet.snippet.toLowerCase().includes(codeValue.toLowerCase())
      );
    }
    if (
      categoryFilter !== "all" &&
      Array.from(categoryFilter).length !== categories.length
    ) {
      filteredSnippets = filteredSnippets.filter((snippet) =>
        Array.from(categoryFilter).includes(snippet.category)
      );
    }

    return filteredSnippets;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snippets, filterValue, categoryFilter, codeValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: SnippetType, b: SnippetType) => {
      const first = a[
        sortDescriptor.column as keyof SnippetType
      ] as unknown as number;
      const second = b[
        sortDescriptor.column as keyof SnippetType
      ] as unknown as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (snippet: SnippetType, columnKey: React.Key) => {
      const cellValue = snippet[columnKey as keyof SnippetType];

      switch (columnKey) {
        case "title":
          return <p>{snippet.title}</p>;
        case "category":
          return <p>{snippet.category}</p>;
        case "description":
          return (
            <p className="truncate max-w-[200px] w-full">
              {snippet.description}
            </p>
          );
        case "snippet":
          return (
            <p className="truncate max-w-[200px] w-full">{snippet.snippet}</p>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <Link
                  href={`/${snippet.id}`}
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                >
                  <EyeIcon />
                </Link>
              </Tooltip>
              <Tooltip content="Edit Snippet">
                <Link
                  href={`/${snippet.id}/edit`}
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                >
                  <EditIcon />
                </Link>
              </Tooltip>
              <Tooltip color="danger" content="Delete Snippet">
                <ModalDelete {...snippet} />
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);
  const onSearchCodeChange = React.useCallback((valwue?: string) => {
    if (valwue) {
      setCodeValue(valwue);
      setPage(1);
    } else {
      setCodeValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const onClearCode = React.useCallback(() => {
    setCodeValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 flex-col sm:flex-row">
          <div className="w-full flex gap-3 flex-col xl:flex-row">
            <Input
              size="sm"
              isClearable
              className="w-full xl:max-w-[33%] sm:max-w-[70%]"
              placeholder="Search by snippet name..."
              startContent={<SearchIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
            <Input
              size="sm"
              isClearable
              className="w-full xl:max-w-[33%] sm:max-w-[70%]"
              placeholder="Search by snippet code..."
              startContent={<SearchIcon />}
              value={codeValue}
              onClear={() => onClearCode()}
              onValueChange={onSearchCodeChange}
            />
          </div>
          <div className="flex gap-3 max-sm:justify-between">
            <div className="flex gap-3 xl:flex-row flex-col">
              <Dropdown>
                <DropdownTrigger className="flex">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    className="h-12"
                  >
                    Columns
                    {/* <span className="max-xl:hidden">Columns</span>
                  <span className="max-xl:inline hidden">Cols</span> */}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={visibleColumns}
                  selectionMode="multiple"
                  onSelectionChange={setVisibleColumns}
                >
                  {columns.map((column) => (
                    <DropdownItem key={column.uid} className="capitalize">
                      {capitalize(column.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger className="flex">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    className="h-12"
                  >
                    Category
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={categoryFilter}
                  selectionMode="multiple"
                  onSelectionChange={setCategoryFilter}
                >
                  {categories.map((category) => (
                    <DropdownItem
                      key={category.categoryTitle}
                      className="capitalize"
                    >
                      {capitalize(category.categoryTitle)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="flex gap-3 xl:flex-row flex-col">
              <Link href="/category">
                <Button
                  color="primary"
                  variant="bordered"
                  endContent={<Layers3Icon />}
                  className="h-12"
                >
                  <span className="hidden xl:inline">Categories Page</span>
                </Button>
              </Link>
              <Link href="/new">
                <Button
                  color="primary"
                  endContent={<PlusIcon />}
                  className="h-12"
                >
                  <span className="hidden xl:inline">New Snippet</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small text-default-400">
            Total snippets: {snippets.length}
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    codeValue,
    filterValue,
    categoryFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center sm:justify-between items-center mb-10">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);
  if (!isMounted) return null;

  return (
    <Table
      aria-label="Snippets table with custom cells, pagination and sorting"
      isHeaderSticky
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      // selectionMode="multiple"
      topContent={topContent}
      topContentPlacement="outside"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      isStriped={true}
    >
      <TableHeader columns={headerColumns} className="max-w-10">
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No snippets found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
