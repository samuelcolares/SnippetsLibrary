"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Input,
  Button,
  Tooltip,
  SortDescriptor,
  Pagination,
  Spinner,
} from "@nextui-org/react";
import { EditIcon, PlusIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { CategoryType } from "../../../types";
import ModalDelete from "../modal-delete-category";

const categories = [
  {
    id: "1",
    categoryTitle: "LeetCode",
  },
  {
    id: "2",
    categoryTitle: "Shadcn/UI",
  },
  {
    id: "3",
    categoryTitle: "TailwindCSS",
  },
  {
    id: "4",
    categoryTitle: "William Howard",
  },
];

const columns = [
  {
    name: "CATEGORY",
    uid: "category",
    sortable: true,
  },
  { name: "ACTIONS", uid: "actions" },
];

export default function CategoriesTable({categories}:{categories: CategoryType[]}) {
  const [filterValue, setFilterValue] = React.useState("");
  const [page, setPage] = React.useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "id",
    direction: "ascending",
  });

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredCategories = [...categories];

    if (hasSearchFilter) {
      filteredCategories = filteredCategories.filter((snippet) =>
        snippet.categoryTitle.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredCategories;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, filterValue]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: CategoryType, b: CategoryType) => {
      const first = a[
        sortDescriptor.column as keyof CategoryType
      ] as unknown as number;
      const second = b[
        sortDescriptor.column as keyof CategoryType
      ] as unknown as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const renderCell = React.useCallback(
    (category: CategoryType, columnKey: React.Key) => {
      const cellValue = category[columnKey as keyof CategoryType];

      switch (columnKey) {
        case "category":
          return <p>{category.categoryTitle}</p>;
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit Snippet">
                <Link
                  href={`/category/${category.id}/edit`}
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                >
                  <EditIcon />
                </Link>
              </Tooltip>
              <Tooltip color="danger" content="Delete Snippet">
                <ModalDelete {...category} />
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

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3">
          <div className="w-full flex gap-3">
            <Input
              size="sm"
              isClearable
              className="w-full sm:max-w-[33%]"
              placeholder="Search Category..."
              startContent={<SearchIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
          </div>
          <div className="flex gap-3">
            <Link href="/category/newCategory">
              <Button
                color="primary"
                endContent={<PlusIcon />}
                className="h-12"
              >
                New Category
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center">
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
  }, [filterValue, onSearchChange, onRowsPerPageChange, hasSearchFilter]);


  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          Total Categories: {categories.length}
        </span>
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
  }, [items.length, page, pages, hasSearchFilter]);

  // let list = useAsyncList({
  //   async load({ signal }) {
  //     let res = await fetch("https://swapi.py4e.com/api/people/?search", {
  //       signal,
  //     });
  //     let json = await res.json();
  //     setIsLoading(false);

  //     return {
  //       items: json.results,
  //     };
  //   },
  //   async sort({ items, sortDescriptor }) {
  //     return {
  //       items: items.sort((a, b) => {
  //         let first = a[sortDescriptor.column];
  //         let second = b[sortDescriptor.column];
  //         let cmp =
  //           (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

  //         if (sortDescriptor.direction === "descending") {
  //           cmp *= -1;
  //         }

  //         return cmp;
  //       }),
  //     };
  //   },
  // });

  return (
    <Table
      aria-label="Categories Table"
      isHeaderSticky
      isStriped
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
      sortDescriptor={sortDescriptor}
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
    >
      <TableHeader columns={columns} className="w-10">
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
      <TableBody
        emptyContent={"No category found"}
        items={sortedItems}
        loadingContent={<Spinner label="Loading..." />}
      >
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
