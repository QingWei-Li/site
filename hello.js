var botui = new BotUI('app', {
  fontawesome: false
});

botui.message
  .bot({
    loading: true,
    delay: 1000,
    content: '👋'
  })
  .then(() =>
    botui.action.button({
      human: true,
      delay: 500,
      action: [
        {
          text: '😁',
          value: 'hi'
        },
        {
          text: '😲',
          value: 'wow'
        }
      ]
    })
  )
  .then(val =>
    botui.message.bot({
      loading: true,
      delay: 1000,
      content: val.value === 'hi' ? '🌝' : '🧐'
    })
  )
  .then(() =>
    botui.message.bot({
      loading: true,
      delay: 1200,
      content: '🤩 [github.com/qingwei-li](https://github.com/qingwei-li)'
    })
  )
  .then(() =>
    botui.message.bot({
      loading: true,
      delay: 2000,
      content: '🤨'
    })
  )
  .then(() =>
    botui.message.bot({
      loading: true,
      delay: 500,
      content: '📧❓ 💰❓'
    })
  )
  .then(() =>
    botui.action.button({
      human: true,
      delay: 500,
      action: [
        {
          text: '👈',
          value: 'email'
        },
        {
          text: '👉',
          value: 'donate'
        }
      ]
    })
  )
  .then(val =>
    botui.message.bot({
      loading: true,
      delay: 1000,
      content:
        val.value === 'email'
          ? '😇📩  [cinwell.li@gmail.com](mailto:cinwell.li@gmail.com?subject=Hi Qingwei Li)'
          : '🤑😘  [paypal.me/cinwell](paypal.me/cinwell)'
    })
  )
  .then(() =>
    botui.message.bot({
      loading: true,
      delay: 1000,
      content: '🤟'
    })
  );
