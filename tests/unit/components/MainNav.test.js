import MainNav from '@/components/MainNav.vue';
import { render, screen } from '@testing-library/vue';
import { describe, expect } from 'vitest';

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeInTheDocument();
  })
})