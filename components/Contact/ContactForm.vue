<template>
  <form class="mt-10">
    <div class="flex flex-col">
      <label for="name">{{ $t("name") }}</label>
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
      <label for="message">{{ $t("message") }}</label>
      <textarea
        id="message"
        class="caret-special border-1 focus:border-0 focus:ring-0 bg-white/5 rounded-lg py-2 mt-2 placeholder:text-white/20 placeholder:px-3"
        :placeholder="$t('saySomething')"
      />
    </div>
    <button
      type="submit"
      class="mt-6 bg-special/5 px-10 py-2 text-special rounded-full hover:bg-special/10"
      @click="sendEmail()"
    >
      {{ $t("submit") }}
    </button>
  </form>
</template>
