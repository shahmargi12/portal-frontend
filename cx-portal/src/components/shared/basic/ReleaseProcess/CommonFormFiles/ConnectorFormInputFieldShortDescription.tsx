/********************************************************************************
 * Copyright (c) 2021, 2023 Mercedes-Benz Group AG and BMW Group AG
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Typography } from 'cx-portal-shared-components'
import Patterns from 'types/Patterns'
import { ConnectorFormInputField } from './ConnectorFormInputField'

export default function ConnectorFormInputFieldShortDescription({
  control,
  trigger,
  errors,
  label,
  rules,
  value,
  item,
}: any) {
  return (
    <>
      <ConnectorFormInputField
        {...{
          control,
          trigger,
          errors,
          name: item,
          label: label,
          type: 'input',
          textarea: true,
          rules: {
            required: {
              value: true,
              message: rules.required,
            },
            minLength: {
              value: 10,
              message: rules.minLength,
            },
            pattern: {
              value:
                item === 'shortDescriptionEN'
                  ? Patterns.appMarketCard.shortDescriptionEN
                  : Patterns.appMarketCard.shortDescriptionDE,
              message: rules.pattern,
            },
            maxLength: {
              value: 255,
              message: rules.maxLength,
            },
          },
        }}
      />
      <Typography variant="body2" className="form-field" align="right">
        {value}
      </Typography>
    </>
  )
}
