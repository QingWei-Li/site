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
      delay: 1500,
      content: '🤩 [github.com/qingwei-li](https://github.com/qingwei-li)'
    })
  )
  .then(() =>
    botui.message.bot({
      delay: 1500,
      content: '🤨'
    })
  )
  .then(() =>
    botui.message.bot({
      loading: true,
      delay: 1000,
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
    botui.message
      .bot({
        loading: true,
        delay: 1000,
        content:
          val.value === 'email'
            ? '😇📩  [cinwell.li@gmail.com](mailto:cinwell.li@gmail.com?subject=Hi Qingwei Li)'
            : '🤑😘  [paypal.me/cinwell](https://paypal.me/cinwell)'
      })
      .then(() => {
        if (val.value === 'donate') {
          if (/micromessenger/i.test(navigator.userAgent)) {
            return botui.message
              .bot({
                loading: true,
                delay: 1000,
                content: '🤔'
              })
              .then(() =>
                botui.message.bot({
                  loading: true,
                  delay: 2000,
                  content: '![](/wechat.png)'
                })
              );
          } else if (/zh/i.test(navigator.language)) {
            return botui.message
              .bot({
                loading: true,
                delay: 1000,
                content: '😐'
              })
              .then(() =>
                botui.message.bot({
                  loading: true,
                  delay: 2000,
                  content: '![](/pay.png)'
                })
              );
          }
        }
        return;
      })
  )
  .then(() =>
    botui.message.bot({
      delay: 3000,
      content: '🤟'
    })
  );
