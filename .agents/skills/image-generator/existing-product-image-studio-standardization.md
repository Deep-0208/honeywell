# Skill: Existing Product Image Studio Standardization

## Purpose

Standardize existing real industrial product photographs into clean, professional studio-style product images without generating, redesigning, reconstructing, or inventing the product.

This skill is intended for Honeywell Hydraulics product photography and can be reused across product categories.

## Absolute Rule

**EDIT EXISTING IMAGES ONLY. NEVER GENERATE A NEW PRODUCT IMAGE.**

The existing real photograph is the source of truth.

The workflow is:

Existing real product photo
→ preserve product exactly
→ isolate/remove workshop background
→ clean and finish existing colors
→ correct lighting/exposure/white balance
→ pure #FFFFFF background
→ subtle natural contact shadow
→ standardize framing
→ export optimized WebP

Never use text-to-image generation to recreate the product from scratch.

If an editing process changes the actual product, reject the result and return to the original.

## Product Accuracy

Preserve exactly as photographed:

- Overall dimensions and proportions
- Product silhouette
- Tank/reservoir geometry
- Motor size, position, and orientation
- Pump configuration
- Manifold dimensions and placement
- Number and placement of valves
- Pressure gauges
- Level gauges
- Filler breathers
- Pipes, hoses, fittings, and connectors
- Mounting feet and frames
- Accumulators
- Electrical/control components
- Component spacing
- Engineering configuration
- Existing product colors and material appearance

Do not add, remove, move, resize, reshape, simplify, modernize, or redesign any component.

## Allowed Modifications

Only modify photographic presentation:

- Remove workshop/concrete/background environment
- Isolate the real product
- Clean edges
- Correct exposure
- Correct white balance
- Improve lighting
- Improve contrast
- Improve sharpness where appropriate
- Finish existing colors while remaining faithful to the original
- Preserve realistic metal/material textures
- Replace background with pure #FFFFFF
- Add a soft, subtle contact shadow beneath the product
- Reframe without cropping the product
- Standardize composition to 4:3
- Export as WebP

## Target Visual Standard

Match the established Hydraulic Cylinder studio photography:

- Pure #FFFFFF background
- Seamless white appearance
- Professional industrial studio lighting
- Crisp realistic edges
- Natural material reflections
- Faithful product colors
- Soft contact shadow
- Centered, balanced composition
- 4:3 landscape framing
- No workshop environment
- No concrete floor
- No walls or background objects
- No decorative elements
- No artificial CGI appearance

The result should look like the exact same real product was professionally photographed in a studio.

## Default Technical Standard

- Canvas: 1200 × 900 px
- Aspect ratio: 4:3
- Format: WebP
- Quality target: approximately 85–90
- Preserve fine industrial details
- Avoid aggressive compression
- Never crop or distort the product

## Safe File Workflow

1. Inspect the actual source directory and existing files.
2. Do not assume filenames accurately describe the image.
3. Open/inspect each source image before editing.
4. Create a temporary `_edited` directory beside the originals.
5. Edit the existing photograph.
6. Save the edited result to `_edited`.
7. Compare original vs edited.
8. Verify product geometry and components have not changed.
9. Verify background, color, lighting, shadow, and framing.
10. Only after QA, replace the production asset if requested.
11. Preserve existing filenames and paths whenever possible.

Never overwrite originals before QA.

## Example Project Path

For the current Hydraulic Power Pack project:

`C:\Users\DELL\Desktop\Honeywell Seo\website\public\images\products\hydraulic-power-packs`

Temporary edited directory:

`C:\Users\DELL\Desktop\Honeywell Seo\website\public\images\products\hydraulic-power-packs\_edited`

## QA Checklist

For every edited image verify:

### Product identity
- Same real product
- Same silhouette
- Same dimensions/proportions
- Same components
- Same component count
- Same component placement
- Same engineering configuration

### Presentation
- Pure #FFFFFF background
- No workshop artifacts
- Clean edges
- Faithful colors
- Professional lighting
- Natural reflections
- Subtle contact shadow
- Centered composition
- 4:3 framing
- No cropping
- No stretching or distortion

### Technical
- 1200 × 900 px
- WebP
- Good visual quality
- Reasonable file size
- Existing filename/path preserved where possible

## Failure Conditions

Reject the result if:

- A component was invented
- A component disappeared
- The tank changed shape
- The motor changed size or orientation
- Pipes/fittings changed
- Valve count changed
- Gauges changed
- Product proportions changed
- Product was reconstructed by AI
- Product became CGI-like
- Product color became materially different from the original
- Any part was cropped or distorted

When a failure occurs, do not compensate by generating a new product. Re-edit the original photograph.

## Instruction Priority

When using this skill, prioritize:

1. Real product accuracy
2. Preservation of original engineering configuration
3. Existing-image editing
4. Clean studio presentation
5. Visual consistency with the Hydraulic Cylinder standard
6. Image optimization

**Never sacrifice product accuracy for aesthetics.**

## Reusable Command Pattern

When the user says something such as:

“Standardize these product images”

apply this skill automatically:

- Find the existing source images.
- Inspect them.
- Edit the existing photographs only.
- Preserve the real products exactly.
- Apply the studio-standard presentation.
- QA each result.
- Do not generate replacement products.
