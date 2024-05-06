"use client";

import styled from "styled-components";
import Link from "next/link";

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function Menu() {
  return (
    <Stack>
      <nav>
        <UL>
          <li>
            <a href="/">Home page for app 1</a>
          </li>
          <li>
            <a href="/internal">Internal page for app 1</a>
          </li>
          <li>
            <a href="/internal/sub">Sub page for app 1</a>
          </li>
        </UL>
      </nav>

      <nav>
        <UL>
          <li>
            <Link href="/">Home page for app 2</Link>
          </li>
          <li>
            <Link href="/internal">Internal page for app 2</Link>
          </li>
        </UL>
      </nav>
    </Stack>
  );
}
