# Optimal Next.js App Router File Structure

## Recommended Structure

```
app/
├── layout.tsx                    # Root layout (global header, footer, fonts)
├── page.tsx                      # Landing page (orange animation)
├── about/
│   └── page.tsx                  # About page
├── work/                         # Main portfolio section
│   ├── page.tsx                  # Gallery with filters (default: all projects)
│   ├── loading.tsx               # Loading state for work page
│   └── [slug]/
│       ├── page.tsx              # Individual project page
│       └── loading.tsx           # Loading state for project pages
├── archive/
│   └── page.tsx                  # Fun things/hobbies page
└── globals.css                   # Global styles
```

## Why This Structure?

### 1. **Semantic URL Structure**

```
/                    → Landing page (orange animation)
/about               → About page
/work                → Portfolio gallery (all projects)
/work?filter=cs      → CS projects only
/work?filter=2d-art  → 2D art projects only
/work?filter=3d-art  → 3D art projects only
/work/project-slug   → Individual project page
/archive             → Fun things/hobbies
```

### 2. **SEO Benefits**

- `/work` is more professional than `/portfolio`
- Clear hierarchy: work → individual projects
- Archive is separate from professional work
- Landing page at root for maximum impact

### 3. **User Experience**

- Intuitive navigation flow
- Clear separation of professional work vs. personal interests
- Easy to remember URLs

## Alternative Structures (Less Optimal)

### Option A: Portfolio-focused

```
/portfolio          # Less professional
/portfolio/[slug]   # Longer URLs
```

### Option B: Projects-focused

```
/projects           # Generic, doesn't convey portfolio
/projects/[slug]    # Could be confused with blog posts
```

### Option C: Category-based

```
/cs                 # Too specific for main gallery
/art                # Doesn't include all work types
```

## Component Organization

```
components/
├── landing/                    # Landing page components
│   ├── OrangeAnimation.tsx
│   ├── AnimationFrame.tsx
│   ├── NameReveal.tsx
│   └── OrangeSliceNav.tsx
├── work/                      # Work/portfolio components
│   ├── WorkGallery.tsx        # Main gallery grid
│   ├── WorkFilters.tsx        # Filter tabs
│   ├── WorkCard.tsx           # Project cards
│   └── WorkHero.tsx           # Project detail hero
├── layout/                    # Layout components
│   ├── Header.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── about/                     # About page components
│   ├── AboutContent.tsx
│   └── ResumeSection.tsx
├── archive/                   # Archive components
│   ├── ArchiveGrid.tsx
│   └── ArchiveCard.tsx
└── ui/                        # Reusable UI components
    ├── Button.tsx
    ├── Modal.tsx
    └── AnimatedCursor.tsx
```

## Data Organization

```
lib/
├── data/
│   ├── work.ts                 # All project data
│   ├── archive.ts              # Hobby/archive data
│   └── about.ts                # About page content
├── types.ts                    # TypeScript definitions
└── utils.ts                    # Utility functions
```

## Route Handlers (if needed)

```
app/
├── api/
│   ├── work/
│   │   └── route.ts            # API for filtered work data
│   └── projects/
│       └── [slug]/
│           └── route.ts        # API for individual project data
```

## Metadata Strategy

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: "%s | Kylie Chang",
    default: "Kylie Chang - Creative Developer & Artist",
  },
  description:
    "Portfolio of Kylie Chang - Computer Science, 2D Art, and 3D Art projects",
};

// app/work/page.tsx
export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of my projects in computer science, 2D art, and 3D art",
};

// app/work/[slug]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProject(params.slug);
  return {
    title: project.title,
    description: project.description,
  };
}
```

## Loading States

```
app/
├── work/
│   ├── loading.tsx             # Shows while work page loads
│   └── [slug]/
│       └── loading.tsx         # Shows while project page loads
```

## Error Handling

```
app/
├── work/
│   ├── error.tsx               # Error boundary for work section
│   └── [slug]/
│       └── error.tsx           # Error boundary for project pages
├── not-found.tsx               # 404 page
└── global-error.tsx            # Global error boundary
```

## Benefits of This Structure

1. **SEO Optimized**: Clear, semantic URLs
2. **User Friendly**: Intuitive navigation
3. **Scalable**: Easy to add new sections
4. **Maintainable**: Logical component organization
5. **Performance**: Proper loading states and error boundaries
6. **Professional**: `/work` conveys portfolio better than `/portfolio`
