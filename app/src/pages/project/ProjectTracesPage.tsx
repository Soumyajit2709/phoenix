import React, { Suspense } from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { Outlet } from "react-router";

import { Loading } from "@phoenix/components/Loading";
import { SpanFilterConditionProvider } from "@phoenix/pages/project/SpanFilterConditionContext";
import { TracesTable } from "@phoenix/pages/project/TracesTable";
import { TracingRoot } from "@phoenix/pages/TracingRoot";

import { ProjectPageQueriesTracesQuery as ProjectPageTracesQueryType } from "./__generated__/ProjectPageQueriesTracesQuery.graphql";
import {
  ProjectPageQueriesTracesQuery,
  useProjectPageQueryReferenceContext,
} from "./ProjectPageQueries";

const TracesTabContent = ({
  tracesQueryReference,
}: {
  tracesQueryReference: PreloadedQuery<ProjectPageTracesQueryType>;
}) => {
  const data = usePreloadedQuery<ProjectPageTracesQueryType>(
    ProjectPageQueriesTracesQuery,
    tracesQueryReference
  );

  return (
    <Suspense>
      <TracesTable project={data.project} />
    </Suspense>
  );
};

export const ProjectTracesPage = () => {
  const { tracesQueryReference } = useProjectPageQueryReferenceContext();
  if (!tracesQueryReference) {
    return null;
  }
  return (
    <TracingRoot>
      <SpanFilterConditionProvider>
        <Suspense fallback={<Loading />}>
          <TracesTabContent tracesQueryReference={tracesQueryReference} />
        </Suspense>
      </SpanFilterConditionProvider>
      <Suspense>
        <Outlet />
      </Suspense>
    </TracingRoot>
  );
};
