import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { format } from "date-fns";

const HistoryPage = async () => {
  const { userId } = auth();

  const userHistory = await db.aIOutput.findMany({
    where: { userId: userId as string },
  });

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded-lg">
        <div className="bg-[#0E0E10] h-fit rounded-2xl w-fit">
          <TextRevealCard
            text="Output History"
            revealText="Output History"
          ></TextRevealCard>
        </div>
      </div>
      <div className="mt-5 py-6 px-4 bg-white rounded-lg">
        <Table>
          <TableCaption>A List Of Your AI Output History</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Template</TableHead>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userHistory && userHistory.length > 0
              ? userHistory.map((history, index) => (
                  <TableRow key={index}>
                    <TableCell>{history.templateUsed}</TableCell>
                    <TableCell className="w-[250px]">{history.title}</TableCell>
                    <TableCell className="whitespace-pre-wrap">
                      {history.description}
                    </TableCell>
                    <TableCell className="text-right">
                      {format(history.createdAt, "MM/dd/yyyy")}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HistoryPage;
