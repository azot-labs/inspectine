import { Component, JSX } from 'solid-js';

export const Layout: Component<{ children: JSX.Element }> = (props) => {
  return (
    <main class="px-4 py-4 min-w-[290px] min-h-[360px] bg-[#EFEFF4]">
      {props.children}
    </main>
  );
};
