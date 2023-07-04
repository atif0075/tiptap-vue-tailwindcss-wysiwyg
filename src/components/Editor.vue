<template>
  <div id="app" class="flex justify-end flex-col">
    <main class="md:px-5">
      <div
        class="flex justify-start flex-wrap border rounded-t-xl dark:border-zinc-700 p-2 space-x-1"
      >
        <el-tooltip content="Bold">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full dark:text-white hover:text-blue-500 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"
                ></path>
              </g>
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Italic">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Strike">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M224 128a8 8 0 0 1-8 8h-40.07c9.19 7.11 16.07 17.2 16.07 32c0 13.34-7 25.7-19.75 34.79C160.33 211.31 144.61 216 128 216s-32.33-4.69-44.25-13.21C71 193.7 64 181.34 64 168a8 8 0 0 1 16 0c0 17.35 22 32 48 32s48-14.65 48-32c0-14.85-10.54-23.58-38.77-32H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM76.33 104a8 8 0 0 0 7.61-10.49a17.3 17.3 0 0 1-.83-5.51c0-18.24 19.3-32 44.89-32c18.84 0 34.16 7.42 41 19.85a8 8 0 0 0 14-7.7C173.33 50.52 152.77 40 128 40c-34.71 0-60.89 20.63-60.89 48a33.73 33.73 0 0 0 1.62 10.49a8 8 0 0 0 7.6 5.51Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Code Block">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleCodeBlock().run()"
            :class="{ 'is-active': editor.isActive('codeBlock') }"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Paragraph">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().setParagraph().run()"
            :class="{ 'is-active': editor.isActive('paragraph') }"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"
                ></path>
              </g>
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Heading 1">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 17V7h2v4h4V7h2v10h-2v-4H7v4Zm12 0V9h-2V7h4v10Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Heading 2">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 17V7h2v4h4V7h2v10H9v-4H5v4Zm10 0v-4q0-.825.588-1.413Q14.175 11 15 11h4V9h-6V7h6q.825 0 1.413.587Q21 8.175 21 9v2q0 .825-.587 1.412Q19.825 13 19 13h-4v2h6v2Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Heading 3">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 17V7h2v4h4V7h2v10H9v-4H5v4Zm10 0v-2h6v-2h-4v-2h4V9h-6V7h6q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Bullet List">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 19v-2h12v2Zm0-6v-2h12v2Zm0-6V5h12v2ZM5 20q-.825 0-1.413-.587Q3 18.825 3 18q0-.825.587-1.413Q4.175 16 5 16q.825 0 1.412.587Q7 17.175 7 18q0 .825-.588 1.413Q5.825 20 5 20Zm0-6q-.825 0-1.413-.588Q3 12.825 3 12t.587-1.413Q4.175 10 5 10q.825 0 1.412.587Q7 11.175 7 12q0 .825-.588 1.412Q5.825 14 5 14Zm0-6q-.825 0-1.413-.588Q3 6.825 3 6t.587-1.412Q4.175 4 5 4q.825 0 1.412.588Q7 5.175 7 6t-.588 1.412Q5.825 8 5 8Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Ordered List">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
                ></path>
              </g>
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Block Quote">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'is-active': editor.isActive('blockquote') }"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                ></path>
              </g>
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Horizontal Rule">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().setHorizontalRule().run()"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"></path>
              </g>
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Highlight">
          <button
            class="p-2 relative group hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="showHighlight = !showHighlight"
            :class="{ 'is-active': showHighlight }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46ZM96 210v-58h64v58a88.33 88.33 0 0 1-64 0Zm48-74h-32v-35.06l32-16Zm46.22 54.22A88.09 88.09 0 0 1 176 201.77V152a16 16 0 0 0-16-16V72a8 8 0 0 0-11.58-7.16l-48 24A8 8 0 0 0 96 96v40a16 16 0 0 0-16 16v49.77a88 88 0 1 1 110.22-11.55Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Left">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 22q-.425 0-.712-.288Q2 21.425 2 21V3q0-.425.288-.713Q2.575 2 3 2t.713.287Q4 2.575 4 3v18q0 .425-.287.712Q3.425 22 3 22Zm4.5-12q-.625 0-1.062-.438Q6 9.125 6 8.5t.438-1.062Q6.875 7 7.5 7h13q.625 0 1.062.438Q22 7.875 22 8.5t-.438 1.062Q21.125 10 20.5 10Zm0 7q-.625 0-1.062-.438Q6 16.125 6 15.5t.438-1.062Q6.875 14 7.5 14h7q.625 0 1.062.438q.438.437.438 1.062t-.438 1.062Q15.125 17 14.5 17Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Center">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 22v-5H6v-3h5v-4H3V7h8V2h2v5h8v3h-8v4h5v3h-5v5Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Right">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 22V2h2v20ZM8 17v-3h10v3Zm-6-7V7h16v3Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Justify">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().setTextAlign('justify').run()"
            :class="{
              'is-active': editor.isActive({ textAlign: 'justify' }),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <g
                id="feTextAlignJustify0"
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              >
                <g id="feTextAlignJustify1" fill="currentColor">
                  <path
                    id="feTextAlignJustify2"
                    d="M19 7H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"
                  />
                </g>
              </g>
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Undo">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()"
            :class="{
              'is-disabled': !editor.can().chain().focus().undo().run(),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 19v-2h7.1q1.575 0 2.737-1Q18 15 18 13.5T16.837 11q-1.162-1-2.737-1H7.8l2.6 2.6L9 14L4 9l5-5l1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5q0 2.35-1.737 3.925Q16.525 19 14.1 19Z"
              />
            </svg>
          </button>
        </el-tooltip>
        <el-tooltip content="Redo">
          <button
            class="p-2 hover:bg-zinc-100 hover:rounded-full hover:text-blue-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()"
            :class="{
              'is-disabled': !editor.can().chain().focus().redo().run(),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.9 19q-2.425 0-4.162-1.575Q4 15.85 4 13.5q0-2.35 1.738-3.925Q7.475 8 9.9 8h6.3l-2.6-2.6L15 4l5 5l-5 5l-1.4-1.4l2.6-2.6H9.9q-1.575 0-2.737 1Q6 12 6 13.5T7.163 16q1.162 1 2.737 1H17v2Z"
              />
            </svg>
          </button>
        </el-tooltip>
      </div>
      <div
        v-if="showHighlight"
        class="flex justify-start flex-wrap border border-t-0 dark:border-zinc-700 p-2 space-x-1"
      >
        <el-tooltip content="Orange">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#ffc078' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#ffc078]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Yellow">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#fff350' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#fff350' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#fff350]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Green">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#8ce99a' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#8ce99a]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Blue">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#74c0fc' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#74c0fc]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Purple">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#b197fc' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#b197fc]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Pink">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#f8bbd0' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#f8bbd0' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#f8bbd0]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Red">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: 'red' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: 'red' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[red]"></div>
          </button>
        </el-tooltip>
        <el-tooltip content="Gray">
          <button
            @click="
              editor.chain().focus().toggleHighlight({ color: '#e0e0e0' }).run()
            "
            :class="{
              'is-active': editor.isActive('highlight', { color: '#e0e0e0' }),
            }"
          >
            <div class="w-6 h-6 rounded-full bg-[#e0e0e0]"></div>
          </button>
        </el-tooltip>

        <el-tooltip content="Remove highlight">
          <button
            @click="
              editor
                .chain()
                .focus()
                .toggleHighlight({ color: 'transparent' })
                .run()
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm5-10C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
              />
            </svg>
          </button>
        </el-tooltip>
      </div>
      <div class="border border-t-0 dark:border-zinc-700">
        <EditorContent
          v-model="content"
          :editor="editor"
          class="p-1 !space-y-1"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
const content = ref<String>("");
const showHighlight = ref<Boolean>(false);
const editor: Editor = new Editor({
  extensions: [
    StarterKit,
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ],
  content: content.value,
  onUpdate: ({ editor }) => {
    content.value = editor.getHTML();
  },
});
</script>
<style>
.ProseMirror {
  min-height: 15rem;
  outline: none;
  @apply prose dark:prose-invert !w-full !max-w-full !space-y-0;
}
.ProseMirror p {
  @apply !m-0;
}
.ProseMirror p:first-child {
  @apply !mt-0;
}
.ProseMirror p:last-child {
  @apply !mb-0;
}
.ProseMirror h1 {
  @apply !m-0;
}
.ProseMirror h1:first-child {
  @apply !mt-0;
}
.ProseMirror h1:last-child {
  @apply !mb-0;
}
.ProseMirror h2 {
  @apply !m-0;
}
.ProseMirror h2:first-child {
  @apply !mt-0;
}
.ProseMirror h2:last-child {
  @apply !mb-0;
}
.ProseMirror h3 {
  @apply !m-0;
}
.ProseMirror h3:first-child {
  @apply !mt-0;
}
.ProseMirror h3:last-child {
  @apply !mb-0;
}
.ProseMirror ul {
  @apply !m-0;
}
.ProseMirror ul:first-child {
  @apply !mt-0;
}
.ProseMirror ul:last-child {
  @apply !mb-0;
}
.ProseMirror ol {
  @apply !m-0;
}
.ProseMirror ol:first-child {
  @apply !mt-0;
}
.ProseMirror ol:last-child {
  @apply !mb-0;
}
.ProseMirror li {
  @apply !m-0;
}
.ProseMirror li:first-child {
  @apply !mt-0;
}
.ProseMirror li:last-child {
  @apply !mb-0;
}
.ProseMirror li p {
  @apply !m-0;
}
.ProseMirror li p:first-child {
  @apply !mt-0;
}
.ProseMirror li p:last-child {
  @apply !mb-0;
}
.ProseMirror li > ul {
  @apply !mt-0;
}
.ProseMirror li > ul:first-child {
  @apply !mt-0;
}
.ProseMirror li > ul:last-child {
  @apply !mb-0;
}

.ProseMirror-focused {
  @apply outline-none !space-y-0;
}
.is-active {
  @apply bg-zinc-100 rounded-full text-blue-500 dark:bg-zinc-700;
}
.is-disabled {
  @apply bg-zinc-200 rounded-full text-zinc-400 dark:bg-zinc-700 cursor-not-allowed;
}
</style>
