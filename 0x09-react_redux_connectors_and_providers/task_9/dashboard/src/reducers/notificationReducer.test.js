        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };

    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        isRead: false,
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        isRead: false,
        value: "New data available",
      },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: "DEFAULT",
      loading: true,
      ...normalizedData,
    };

    const state = notificationReducer(fromJS(initialState), action);

    expect(state.toJS()).toEqual(expectedData);
  });
});
