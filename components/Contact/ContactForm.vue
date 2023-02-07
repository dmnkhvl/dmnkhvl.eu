<template>
  <section class="page-section">
    <h2 class="subtitle">Lets link</h2>
    <form>
      <div class="flex flex-col">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="caret-white bg-white/5 rounded-lg py-2 mt-2 placeholder:text-white/20 placeholder:px-3 focus:ring-0 focus:border-special"
          placeholder="Dominik Havel"
        />
      </div>
      <div class="flex flex-col mt-4">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="bg-white/5 rounded-lg py-2 mt-2 placeholder:text-white/20 placeholder:px-3"
          placeholder="dev@dmnkhvl.eu"
        />
      </div>
      <div class="flex flex-col mt-4">
        <label for="message">Message</label>
        <textarea
          id="message"
          class="bg-white/5 rounded-lg py-2 mt-2 placeholder:text-white/20 placeholder:px-3"
          placeholder="Say something nice :)"
        />
      </div>
      <button
        type="submit"
        class="mt-4 bg-special/5 px-6 py-2 text-special rounded-full hover:bg-special/10"
      >
        Submit
      </button>
    </form>
  </section>
</template>
