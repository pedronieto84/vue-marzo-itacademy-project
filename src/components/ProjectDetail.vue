<template>
  <div>
    <b-card title="Project Title">
      <b-card-body>
        <div class="mb-4">description</div>
        <b-row>
          <b-col>
            <label for="published-display">Published</label>
            <b-form-datepicker
              id="published-display"
              class="mb-2"
              readonly
            ></b-form-datepicker>
          </b-col>
          <b-col>
            <label for="deadline-display">Deadline</label>
            <b-form-datepicker
              id="deadline-display"
              class="mb-2"
              readonly
            ></b-form-datepicker>
          </b-col>
          <b-col>
            <label for="bid-display">Bid</label>
            <b-form-input id="bid" readonly> Bid </b-form-input>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card title="Tech Set" class="mb-4">
        <b-card-body>
          <b-badge pill variant="info"> react </b-badge>
        </b-card-body>
      </b-card>
      <div><h3>Files</h3></div>
    </b-card>
  </div>
</template>