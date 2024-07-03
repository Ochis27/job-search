import MainNav from '@/components/MainNav.vue';
import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(item => item.textContent);
    expect(navigationMenuTexts).toEqual(["Teams", "Locations", "Life at Bobo Corp", "How we hire", "Students", "Jobs"]);
  })
})