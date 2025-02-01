import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components';

const defaultComponents = getNextraComponents({
  wrapper({ children }) {
    return (
      <>
        <div style={{ flexGrow: 1, padding: 20 }}>{children}</div>
      </>
    )
  }
})

export function useMDXComponents(components) {
  return {
    ...defaultComponents,
    ...components,
  };
}
