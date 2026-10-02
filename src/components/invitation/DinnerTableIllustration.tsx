import { Sparkle } from "@/components/decorative/Sparkle";

// 직접 구성한 독립적인 식탁 선화. 원본 이미지·외부 그래픽을 사용하지 않습니다.
export function DinnerTableIllustration() {
  return <div className="table-illustration">
    <Sparkle className="table-star star-one" /><Sparkle className="table-star star-two" /><Sparkle className="table-star star-three" />
    <svg viewBox="0 0 560 335" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <mask id="table-rim-mask" maskUnits="userSpaceOnUse" x="50" y="40" width="470" height="200">
          <rect x="50" y="40" width="470" height="200" fill="white" stroke="none" />
          <g fill="black" stroke="black" strokeWidth="3">
            <path d="M97 113q16-6 31 0l-5 43q-10 7-21 0Z" />
            <path d="m191 78 4-26 12 1 2 27c0 7 10 12 11 22l-2 30q-14 5-29-1l1-29c1-10 1-17 1-24Z" />
            <path d="M333 80q-14 7-12 21 0 15 19 15 18 0 20-13l-1-15q-9-10-26-8Zm-11 8-14-10 4 20 11 5Z" />
            <path d="M434 108c-9 21-7 32 5 35 22-3 26-17 21-37Z" />
            <path d="M272 84v57M254 97q18 14 36 0" fill="none" />
          </g>
        </mask>
      </defs>
      {/* Legs sit behind the opaque cloth; only their lower portions are visible. */}
      <g fill="var(--paper)">
        <path d="M88 261h14l-3 38q-6 4-12 0Z" />
        <path d="M458 261h14l1 38q-6 4-12 0Z" />
        <path d="M165 280h18l-1 18q-5 5-2 10l2 14q-8 5-16 0l2-14q3-5-2-10Z" />
        <path d="M377 280h18l-1 18q-5 5-2 10l2 14q-8 5-16 0l2-14q3-5-2-10Z" />
      </g>
      <path d="M168 317q6 3 12 0m200 0q6 3 12 0" strokeWidth=".7" />
      {/* One continuous cloth silhouette shares the tabletop's front ellipse. */}
      <path fill="var(--paper)" d="M60 161
        C57 198 54 235 49 270
        C58 280 72 282 85 279 C94 292 110 294 125 289
        C139 302 159 304 176 297 C191 310 211 312 228 304
        C244 315 265 316 280 307 C295 316 316 315 332 304
        C349 312 369 310 384 297 C401 304 421 302 435 289
        C450 294 466 292 475 279 C488 282 502 280 511 270
        C506 235 503 198 500 161
        C500 198 402 228 280 228 C158 228 60 198 60 161Z" />
      {/* Folds begin at the front rim and follow the cloth down to its hem. */}
      <g strokeWidth="1.05">
        <path d="M84 192C82 221 77 257 85 279M112 204C107 232 107 261 115 283" />
        <path d="M147 214C143 245 145 279 154 300M183 221C181 249 169 280 176 297" />
        <path d="M228 226C226 250 218 284 228 304M280 228C279 253 274 283 280 307" />
        <path d="M332 226C334 250 342 284 332 304M377 221C379 249 391 280 384 297" />
        <path d="M413 214C417 245 415 279 406 300M448 204C453 232 453 261 445 283" />
        <path d="M476 192C478 221 483 257 475 279" />
      </g>
      <g strokeWidth=".65">
        <path d="M66 207C64 229 60 251 61 265M91 239C88 252 88 267 91 274" />
        <path d="M134 236C131 255 131 274 135 285M163 264C160 279 163 289 166 293" />
        <path d="M201 241C199 259 190 282 195 297M237 273C234 287 239 298 242 304" />
        <path d="M263 244C261 262 263 278 261 289M299 244C301 264 297 281 299 294" />
        <path d="M323 273C326 287 321 298 318 304M359 241C361 259 370 282 365 297" />
        <path d="M397 264C400 279 397 289 394 293M426 236C429 255 429 274 425 285" />
        <path d="M469 239C472 252 472 267 469 274M494 207C496 229 500 251 499 265" />
      </g>
      {/* Rear edge is occluded by objects instead of showing through them. */}
      <path d="M60 161C60 124 158 94 280 94S500 124 500 161" mask="url(#table-rim-mask)" />
      <ellipse cx="280" cy="177" rx="64" ry="20" /><ellipse cx="280" cy="175" rx="52" ry="13" />
      <path d="M228 181c10 11 91 17 107-2m-109 3 4 12q52 24 100 0l5-13" />
      <path d="m237 191 2 6m9-3 1 7m10-5 1 7m10-5v7m11-6v6m11-7v6m10-8v7m10-11v7m10-12-1 8" />
      <path d="M248 173q7-14 16-3 6-17 15-3 10-18 18 0 10-10 17 7m-54-4 8 7m13-10 3 8m15-6-4 7" />
      <ellipse cx="168" cy="139" rx="43" ry="14" /><path d="M125 139q2 39 43 40 39-1 43-40m-79 12q35 16 72 0m-66 11q29 15 57 0" />
      <path d="m147 133 7-7 8 8 8-10 8 10 10-7 5 7m-41 33 4 4m10-1 4 4m11-6 4 3" />
      <ellipse cx="357" cy="132" rx="50" ry="17" /><ellipse cx="357" cy="132" rx="40" ry="11" />
      <path d="M326 132q31-28 62 0-31 14-62 0Zm10-3q20-14 44 1m-40 5 4-7m9 8 4-12m8 12 4-10" />
      <ellipse cx="399" cy="181" rx="28" ry="9" /><path d="m371 181 4 18q24 13 48-1l4-17m-48 18 4-8 7 12 8-10 8 9 7-13 7 9" />
      <path d="M97 113q16-6 31 0l-5 43q-10 7-21 0Zm1 7q15 6 28 0m-25 23q12 6 23 0m-17-10 3-4 5 6 6-5" />
      <ellipse cx="112" cy="113" rx="15" ry="4" />
      <path d="M434 108c-9 21-7 32 5 35l2 26m-11 2q11-6 22-1m-17-48q12 6 22-2m-23-12 26-2c5 20 1 34-21 37" />
      <path d="m191 78 4-26 12 1 2 27c0 7 10 12 11 22l-2 30q-14 5-29-1l1-29c1-10 1-17 1-24Z" />
      <path d="m194 58 13 1m-17 43q14 5 29 0m-29 19q14 4 29 0" /><ellipse cx="204" cy="111" rx="6" ry="7" />
      <path d="m197 49 10 1v4l-12-1Z" />
      <path d="M272 84v57m-16 5q16-10 32 0m-18-62h5V47h-5Zm-1-37q-5-8 4-17 8 10 0 17" />
      <path d="M254 97q18 14 36 0m-38-3h7v-25h-7Zm35 0h7V66h-7ZM252 69q-5-8 4-14 7 8 0 14m31-3q-3-9 4-15 7 9 0 15" />
      <path d="M333 80q-14 7-12 21 0 15 19 15 18 0 20-13l-1-15q-9-10-26-8Zm-2 0q9-10 21 0m-9-5v-5m-4 0h8m10 17q16-10 17 0-2 10-15 13m-37-12-14-10 4 20 11 5" />
      <path d="m144 199 20-9m-22 5 20-9m-20 3 18-9m-10 13 27-12m-26 22 32-14M402 145l33 11m-37-7 33 11m-18-16 23 8" />
      <ellipse cx="196" cy="195" rx="12" ry="5" /><path d="m188 195 5-2 5 3 6-2" />
      <ellipse cx="326" cy="99" rx="8" ry="3" transform="translate(-87 40)" />
      <path d="M469 192q7-4 9-12m-11 6q4-2 6-7M84 165q2 4 6 5" strokeWidth=".8" />
    </svg>
  </div>;
}
